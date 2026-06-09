import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, createReview } from '../api/productApi';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Rating from '../components/Rating';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState('');
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewError, setReviewError] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductById(id);
        setProduct(data);
      } catch {
        setError('Product not found');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setReviewLoading(true);
    setReviewError('');
    setReviewSuccess('');
    try {
      await createReview(id, { rating: reviewRating, comment: reviewComment });
      setReviewSuccess('Review submitted successfully!');
      setReviewComment('');
      const { data } = await getProductById(id);
      setProduct(data);
    } catch (err) {
      setReviewError(err.response?.data?.message || 'Failed to submit review');
    } finally {
      setReviewLoading(false);
    }
  };

  if (loading) return <Loader text="Loading product..." />;
  if (error) return <Alert type="error">{error}</Alert>;
  if (!product) return null;

  const discountedPrice =
    product.discount > 0
      ? (product.price - (product.price * product.discount) / 100).toFixed(2)
      : null;

  return (
    <div className="product-detail-page">
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link> / <Link to="/products">Products</Link> / <Link to={`/products?category=${product.category}`}>{product.category}</Link> / <span>{product.name}</span>
      </nav>

      <div className="product-detail-grid">
        {/* Image Gallery */}
        <div className="product-gallery">
          <div className="gallery-main">
            <img
              src={product.images?.[activeImg] || 'https://via.placeholder.com/600x500?text=No+Image'}
              alt={product.name}
              className="gallery-main-img"
            />
            {product.discount > 0 && <span className="gallery-badge">-{product.discount}%</span>}
          </div>
          {product.images?.length > 1 && (
            <div className="gallery-thumbs">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${product.name} ${i + 1}`}
                  className={`gallery-thumb ${activeImg === i ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="product-info">
          <p className="product-detail-category">{product.category} · {product.brand}</p>
          <h1 className="product-detail-name">{product.name}</h1>

          <div className="product-detail-rating">
            <Rating value={product.rating} count={product.numReviews} size="md" />
          </div>

          <div className="product-detail-price">
            {discountedPrice ? (
              <>
                <span className="price-main">${discountedPrice}</span>
                <span className="price-original">${product.price.toFixed(2)}</span>
                <span className="price-save">Save {product.discount}%</span>
              </>
            ) : (
              <span className="price-main">${product.price.toFixed(2)}</span>
            )}
          </div>

          <p className="product-detail-desc">{product.description}</p>

          <div className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-stock'}`}>
            {product.stock > 0 ? `✓ In Stock (${product.stock} available)` : '✗ Out of Stock'}
          </div>

          {product.stock > 0 && (
            <div className="product-actions">
              <div className="qty-selector">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span>{qty}</span>
                <button onClick={() => setQty((q) => Math.min(product.stock, q + 1))}>+</button>
              </div>

              <button
                className={`btn-add-to-cart-lg ${added ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {added ? '✓ Added to Cart!' : '🛒 Add to Cart'}
              </button>
            </div>
          )}

          <div className="product-meta">
            <span className="meta-tag">Category: {product.category}</span>
            <span className="meta-tag">Brand: {product.brand}</span>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2 className="reviews-title">Customer Reviews ({product.numReviews})</h2>

        {/* Submit Review */}
        {isLoggedIn ? (
          <div className="review-form-wrap">
            <h3>Write a Review</h3>
            {reviewError && <Alert type="error">{reviewError}</Alert>}
            {reviewSuccess && <Alert type="success">{reviewSuccess}</Alert>}
            <form className="review-form" onSubmit={handleReviewSubmit}>
              <div className="form-group">
                <label>Rating</label>
                <div className="star-picker">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      className={`star-pick-btn ${s <= reviewRating ? 'active' : ''}`}
                      onClick={() => setReviewRating(s)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label>Comment</label>
                <textarea
                  rows={4}
                  placeholder="Share your experience..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn-primary" disabled={reviewLoading}>
                {reviewLoading ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>
        ) : (
          <Alert type="info">
            <Link to="/login">Sign in</Link> to write a review
          </Alert>
        )}

        {/* Reviews List */}
        <div className="reviews-list">
          {product.reviews?.length === 0 ? (
            <p className="no-reviews">No reviews yet. Be the first to review!</p>
          ) : (
            product.reviews.map((review) => (
              <div key={review._id} className="review-card">
                <div className="review-header">
                  <span className="reviewer-avatar">{review.name?.charAt(0).toUpperCase()}</span>
                  <div>
                    <span className="reviewer-name">{review.name}</span>
                    <Rating value={review.rating} size="sm" />
                  </div>
                  <span className="review-date">{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
                <p className="review-comment">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
