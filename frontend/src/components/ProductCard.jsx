import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const discountedPrice =
    product.discount > 0
      ? (product.price - (product.price * product.discount) / 100).toFixed(2)
      : null;

  return (
    <div className="product-card">
      <Link to={`/products/${product._id}`} className="product-card-img-wrap">
        <img
          src={product.images?.[0] || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
        {product.discount > 0 && (
          <span className="product-badge-discount">-{product.discount}%</span>
        )}
        {product.stock === 0 && (
          <span className="product-badge-oos">Out of Stock</span>
        )}
        {product.isFeatured && product.stock > 0 && (
          <span className="product-badge-featured">⭐ Featured</span>
        )}
      </Link>

      <div className="product-card-body">
        <p className="product-card-category">{product.category}</p>
        <Link to={`/products/${product._id}`} className="product-card-name">
          {product.name}
        </Link>

        <Rating value={product.rating} count={product.numReviews} />

        <div className="product-card-footer">
          <div className="product-price-wrap">
            {discountedPrice ? (
              <>
                <span className="product-price">${discountedPrice}</span>
                <span className="product-price-original">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="product-price">${product.price.toFixed(2)}</span>
            )}
          </div>

          <button
            className="btn-add-cart"
            onClick={() => addToCart(product, 1)}
            disabled={product.stock === 0}
          >
            {product.stock === 0 ? 'Sold Out' : '+ Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
