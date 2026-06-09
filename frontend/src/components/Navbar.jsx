import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar = () => {
  const { userInfo, logout, isAdmin } = useAuth();
  const { itemsCount } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">⚡</span>
          <span className="brand-text">NexStore</span>
        </Link>

        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/products" className="nav-link" onClick={() => setMenuOpen(false)}>
            Shop
          </Link>

          <Link to="/cart" className="nav-link nav-cart" onClick={() => setMenuOpen(false)}>
            <span className="cart-icon">🛒</span>
            {itemsCount > 0 && <span className="cart-badge">{itemsCount}</span>}
          </Link>

          {userInfo ? (
            <div className="nav-dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button className="nav-user-btn">
                <span className="user-avatar">{userInfo.name?.charAt(0).toUpperCase()}</span>
                <span>{userInfo.name?.split(' ')[0]}</span>
                <span className="dropdown-arrow">▾</span>
              </button>
              {dropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile" className="dropdown-item" onClick={() => setDropdownOpen(false)}>Profile</Link>
                  <Link to="/orders" className="dropdown-item" onClick={() => setDropdownOpen(false)}>My Orders</Link>
                  {isAdmin && (
                    <Link to="/admin" className="dropdown-item dropdown-admin" onClick={() => setDropdownOpen(false)}>
                      Admin Dashboard
                    </Link>
                  )}
                  <button className="dropdown-item dropdown-logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="nav-auth-buttons">
              <Link to="/login" className="btn-ghost" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="btn-primary-sm" onClick={() => setMenuOpen(false)}>Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
