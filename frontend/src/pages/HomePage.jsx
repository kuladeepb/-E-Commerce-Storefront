import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFeaturedProducts, getProducts } from '../api/productApi';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const CATEGORIES = [
  { name: 'Electronics', icon: '💻', color: '#6366f1' },
  { name: 'Clothing', icon: '👕', color: '#f59e0b' },
  { name: 'Books', icon: '📚', color: '#10b981' },
  { name: 'Home & Garden', icon: '🏡', color: '#ec4899' },
  { name: 'Sports', icon: '⚽', color: '#3b82f6' },
  { name: 'Beauty', icon: '💄', color: '#8b5cf6' },
];

const HomePage = () => {
  const [featured, setFeatured] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [featRes, newRes] = await Promise.all([
          getFeaturedProducts(),
          getProducts({ limit: 4, sort: 'newest' }),
        ]);
        setFeatured(featRes.data);
        setNewArrivals(newRes.data.products);
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) navigate(`/products?keyword=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🔥 New Season Sale — Up to 20% Off</div>
          <h1 className="hero-title">
            Discover <span className="hero-gradient-text">Premium</span> Products
          </h1>
          <p className="hero-subtitle">
            Shop the latest electronics, fashion, home essentials, and more. Free shipping on orders over $100.
          </p>
          <form className="hero-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products, brands, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="hero-search-input"
            />
            <button type="submit" className="hero-search-btn">Search</button>
          </form>
          <div className="hero-actions">
            <Link to="/products" className="btn-hero-primary">Shop Now →</Link>
            <Link to="/products?isFeatured=true" className="btn-hero-ghost">View Featured</Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="stat-value">10k+</span>
            <span className="stat-label">Products</span>
          </div>
          <div className="hero-stat">
            <span className="stat-value">50k+</span>
            <span className="stat-label">Customers</span>
          </div>
          <div className="hero-stat">
            <span className="stat-value">4.8★</span>
            <span className="stat-label">Rating</span>
          </div>
        </div>
      </section>

      {/* Category Chips */}
      <section className="categories-section">
        <div className="section-container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="categories-grid">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to={`/products?category=${encodeURIComponent(cat.name)}`}
                className="category-chip"
                style={{ '--cat-color': cat.color }}
              >
                <span className="category-chip-icon">{cat.icon}</span>
                <span className="category-chip-name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">⭐ Featured Products</h2>
            <Link to="/products?isFeatured=true" className="section-link">View all →</Link>
          </div>
          {loading ? (
            <Loader text="Loading featured products..." />
          ) : error ? (
            <Alert type="error">{error}</Alert>
          ) : (
            <div className="products-grid">
              {featured.slice(0, 8).map((p) => <ProductCard key={p._id} product={p} />)}
            </div>
          )}
        </div>
      </section>

      {/* New Arrivals */}
      {!loading && newArrivals.length > 0 && (
        <section className="products-section products-section-alt">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">🆕 New Arrivals</h2>
              <Link to="/products?sort=newest" className="section-link">View all →</Link>
            </div>
            <div className="products-grid">
              {newArrivals.map((p) => <ProductCard key={p._id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Promo Banners */}
      <section className="promo-section">
        <div className="section-container">
          <div className="promo-grid">
            <div className="promo-card promo-card-1">
              <div className="promo-content">
                <h3>Free Shipping</h3>
                <p>On all orders over $100</p>
                <Link to="/products" className="promo-link">Shop Now →</Link>
              </div>
              <span className="promo-emoji">🚚</span>
            </div>
            <div className="promo-card promo-card-2">
              <div className="promo-content">
                <h3>30-Day Returns</h3>
                <p>Hassle-free return policy</p>
                <Link to="/products" className="promo-link">Shop Now →</Link>
              </div>
              <span className="promo-emoji">↩</span>
            </div>
            <div className="promo-card promo-card-3">
              <div className="promo-content">
                <h3>Secure Payments</h3>
                <p>100% secure transactions</p>
                <Link to="/products" className="promo-link">Shop Now →</Link>
              </div>
              <span className="promo-emoji">🔒</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
