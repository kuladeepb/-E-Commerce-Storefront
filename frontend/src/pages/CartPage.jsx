import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQty, clearCart, itemsPrice, shippingPrice, taxPrice, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="empty-state">
          <span className="empty-icon">🛒</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <Link to="/products" className="btn-primary">Start Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img
                src={item.images?.[0] || 'https://via.placeholder.com/100'}
                alt={item.name}
                className="cart-item-img"
              />
              <div className="cart-item-details">
                <Link to={`/products/${item._id}`} className="cart-item-name">{item.name}</Link>
                <p className="cart-item-brand">{item.brand}</p>
                <p className="cart-item-price">${item.price.toFixed(2)} each</p>
              </div>

              <div className="cart-item-qty">
                <button onClick={() => updateQty(item._id, item.qty - 1)} disabled={item.qty <= 1}>−</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item._id, item.qty + 1)} disabled={item.qty >= item.stock}>+</button>
              </div>

              <div className="cart-item-subtotal">
                ${(item.price * item.qty).toFixed(2)}
              </div>

              <button className="cart-item-remove" onClick={() => removeFromCart(item._id)}>✕</button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="cart-summary">
          <h2 className="summary-title">Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${itemsPrice.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shippingPrice === 0 ? <span className="free-shipping">FREE</span> : `$${shippingPrice.toFixed(2)}`}</span>
          </div>
          <div className="summary-row">
            <span>Tax (8%)</span>
            <span>${taxPrice.toFixed(2)}</span>
          </div>
          <div className="summary-divider" />
          <div className="summary-row summary-total">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          {shippingPrice > 0 && (
            <p className="free-shipping-hint">
              Add ${(100 - itemsPrice).toFixed(2)} more for free shipping!
            </p>
          )}

          <button
            className="btn-checkout"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout →
          </button>

          <Link to="/products" className="continue-shopping-link">← Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
