import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../api/productApi';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Alert from '../components/Alert';
import Pagination from '../components/Pagination';

const CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Beauty', 'Toys', 'Automotive', 'Other'];
const SORT_OPTIONS = [
  { value: 'newest', label: 'Newest First' },
  { value: 'price-asc', label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'rating', label: 'Top Rated' },
];

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || '';
  const sort = searchParams.get('sort') || 'newest';
  const minPrice = searchParams.get('minPrice') || '';
  const maxPrice = searchParams.get('maxPrice') || '';
  const rating = searchParams.get('rating') || '';

  const [localKeyword, setLocalKeyword] = useState(keyword);
  const [localMin, setLocalMin] = useState(minPrice);
  const [localMax, setLocalMax] = useState(maxPrice);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const params = { page, limit: 12, sort };
      if (keyword) params.keyword = keyword;
      if (category) params.category = category;
      if (minPrice) params.minPrice = minPrice;
      if (maxPrice) params.maxPrice = maxPrice;
      if (rating) params.rating = rating;

      const { data } = await getProducts(params);
      setProducts(data.products);
      setPages(data.pages);
      setTotal(data.total);
    } catch (err) {
      setError('Failed to load products. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  }, [page, keyword, category, sort, minPrice, maxPrice, rating]);

  useEffect(() => { fetchProducts(); }, [fetchProducts]);
  useEffect(() => { setPage(1); }, [keyword, category, sort, minPrice, maxPrice, rating]);

  const updateParam = (key, value) => {
    const params = Object.fromEntries(searchParams.entries());
    if (value) params[key] = value;
    else delete params[key];
    delete params.page;
    setSearchParams(params);
    setPage(1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    updateParam('keyword', localKeyword);
  };

  const clearFilters = () => {
    setSearchParams({});
    setLocalKeyword('');
    setLocalMin('');
    setLocalMax('');
    setPage(1);
  };

  return (
    <div className="products-page">
      <div className="products-page-header">
        <h1 className="products-page-title">
          {category ? `${category}` : keyword ? `Results for "${keyword}"` : 'All Products'}
        </h1>
        <p className="products-page-count">{total} products found</p>
      </div>

      <div className="products-layout">
        {/* Filters Sidebar */}
        <aside className={`filters-sidebar ${filtersOpen ? 'open' : ''}`}>
          <div className="filters-header">
            <h3>Filters</h3>
            <button className="clear-filters-btn" onClick={clearFilters}>Clear All</button>
          </div>

          {/* Search */}
          <div className="filter-group">
            <label className="filter-label">Search</label>
            <form onSubmit={handleSearch} className="filter-search">
              <input
                type="text"
                placeholder="Search products..."
                value={localKeyword}
                onChange={(e) => setLocalKeyword(e.target.value)}
              />
              <button type="submit">🔍</button>
            </form>
          </div>

          {/* Category */}
          <div className="filter-group">
            <label className="filter-label">Category</label>
            <div className="filter-list">
              <button
                className={`filter-chip ${!category ? 'active' : ''}`}
                onClick={() => updateParam('category', '')}
              >
                All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  className={`filter-chip ${category === c ? 'active' : ''}`}
                  onClick={() => updateParam('category', c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="filter-group">
            <label className="filter-label">Price Range</label>
            <div className="price-range-inputs">
              <input
                type="number"
                placeholder="Min"
                value={localMin}
                onChange={(e) => setLocalMin(e.target.value)}
                min="0"
              />
              <span>–</span>
              <input
                type="number"
                placeholder="Max"
                value={localMax}
                onChange={(e) => setLocalMax(e.target.value)}
                min="0"
              />
            </div>
            <button
              className="apply-price-btn"
              onClick={() => {
                updateParam('minPrice', localMin);
                updateParam('maxPrice', localMax);
              }}
            >
              Apply Price
            </button>
          </div>

          {/* Rating */}
          <div className="filter-group">
            <label className="filter-label">Min Rating</label>
            {[4, 3, 2, 1].map((r) => (
              <button
                key={r}
                className={`filter-chip ${rating === String(r) ? 'active' : ''}`}
                onClick={() => updateParam('rating', String(r))}
              >
                {'★'.repeat(r)}{'☆'.repeat(5 - r)} & up
              </button>
            ))}
          </div>
        </aside>

        {/* Products Grid */}
        <div className="products-main">
          {/* Sort + Mobile Filter Toggle */}
          <div className="products-toolbar">
            <button className="filter-toggle-btn" onClick={() => setFiltersOpen(!filtersOpen)}>
              ⚙️ {filtersOpen ? 'Hide' : 'Show'} Filters
            </button>
            <select
              className="sort-select"
              value={sort}
              onChange={(e) => updateParam('sort', e.target.value)}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {loading ? (
            <Loader text="Loading products..." />
          ) : error ? (
            <Alert type="error">{error}</Alert>
          ) : products.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon">🔍</span>
              <h3>No products found</h3>
              <p>Try adjusting your search or filters</p>
              <button className="btn-primary" onClick={clearFilters}>Clear Filters</button>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {products.map((p) => <ProductCard key={p._id} product={p} />)}
              </div>
              <Pagination page={page} pages={pages} onPageChange={setPage} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
