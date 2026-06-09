import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-text">NexStore</span>
          <p className="footer-tagline">Premium products at your fingertips.</p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Shop</h4>
            <Link to="/products">All Products</Link>
            <Link to="/products?category=Electronics">Electronics</Link>
            <Link to="/products?category=Clothing">Clothing</Link>
            <Link to="/products?category=Books">Books</Link>
          </div>
          <div className="footer-col">
            <h4>Account</h4>
            <Link to="/login">Sign In</Link>
            <Link to="/register">Register</Link>
            <Link to="/orders">My Orders</Link>
            <Link to="/profile">Profile</Link>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Returns</a>
            <a href="#">Track Order</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NexStore. All rights reserved.</p>
        <div className="footer-badges">
          <span>🔒 Secure Checkout</span>
          <span>📦 Free Shipping $100+</span>
          <span>↩ 30-Day Returns</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
