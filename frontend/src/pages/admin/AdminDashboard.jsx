import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getOrderStats } from '../../api/orderApi';
import { getUserStats } from '../../api/userApi';
import { getProducts } from '../../api/productApi';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';

const STATUS_COLORS = {
  Pending: '#f59e0b', Processing: '#6366f1',
  Shipped: '#3b82f6', Delivered: '#10b981', Cancelled: '#ef4444',
};

const AdminDashboard = () => {
  const [orderStats, setOrderStats] = useState(null);
  const [userStats, setUserStats] = useState(null);
  const [lowStock, setLowStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [oStats, uStats, products] = await Promise.all([
          getOrderStats(),
          getUserStats(),
          getProducts({ limit: 100 }),
        ]);
        setOrderStats(oStats.data);
        setUserStats(uStats.data);
        setLowStock(products.data.products.filter((p) => p.stock <= 5));
      } catch {
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  if (loading) return <Loader text="Loading dashboard..." />;
  if (error) return <Alert type="error">{error}</Alert>;

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <h1 className="admin-title">Dashboard</h1>
        <p className="admin-subtitle">Welcome back, Admin! Here's what's happening.</p>
      </div>

      {/* Stat Cards */}
      <div className="admin-stats-grid">
        <div className="admin-stat-card stat-card-blue">
          <div className="stat-card-icon">💰</div>
          <div>
            <div className="stat-card-label">Total Revenue</div>
            <div className="stat-card-value">${orderStats?.totalRevenue?.toFixed(2) || '0.00'}</div>
          </div>
        </div>
        <div className="admin-stat-card stat-card-purple">
          <div className="stat-card-icon">📦</div>
          <div>
            <div className="stat-card-label">Total Orders</div>
            <div className="stat-card-value">{orderStats?.totalOrders || 0}</div>
          </div>
        </div>
        <div className="admin-stat-card stat-card-green">
          <div className="stat-card-icon">👥</div>
          <div>
            <div className="stat-card-label">Total Users</div>
            <div className="stat-card-value">{userStats?.totalUsers || 0}</div>
          </div>
        </div>
        <div className="admin-stat-card stat-card-amber">
          <div className="stat-card-icon">⚠️</div>
          <div>
            <div className="stat-card-label">Low Stock Items</div>
            <div className="stat-card-value">{lowStock.length}</div>
          </div>
        </div>
      </div>

      <div className="admin-dashboard-grid">
        {/* Recent Orders */}
        <div className="admin-widget">
          <div className="widget-header">
            <h2>Recent Orders</h2>
            <Link to="/admin/orders" className="widget-link">View All →</Link>
          </div>
          <div className="widget-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {orderStats?.recentOrders?.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <Link to={`/orders/${order._id}`} className="table-link">
                        #{order._id.slice(-6).toUpperCase()}
                      </Link>
                    </td>
                    <td>{order.user?.name}</td>
                    <td>${order.totalPrice?.toFixed(2)}</td>
                    <td>
                      <span
                        className="status-pill"
                        style={{ background: STATUS_COLORS[order.status] + '22', color: STATUS_COLORS[order.status] }}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Orders by Status */}
        <div className="admin-widget">
          <div className="widget-header">
            <h2>Orders by Status</h2>
          </div>
          <div className="status-breakdown">
            {orderStats?.ordersByStatus?.map((s) => (
              <div key={s._id} className="status-bar-row">
                <span className="status-bar-label" style={{ color: STATUS_COLORS[s._id] }}>{s._id}</span>
                <div className="status-bar-track">
                  <div
                    className="status-bar-fill"
                    style={{
                      width: `${(s.count / orderStats.totalOrders) * 100}%`,
                      background: STATUS_COLORS[s._id],
                    }}
                  />
                </div>
                <span className="status-bar-count">{s.count}</span>
              </div>
            ))}
          </div>

          {/* Low Stock Alert */}
          {lowStock.length > 0 && (
            <div className="low-stock-alert">
              <h3>⚠️ Low Stock Products</h3>
              {lowStock.slice(0, 5).map((p) => (
                <div key={p._id} className="low-stock-row">
                  <span>{p.name}</span>
                  <span className="low-stock-count">{p.stock} left</span>
                </div>
              ))}
              <Link to="/admin/products" className="widget-link">Manage Products →</Link>
            </div>
          )}
        </div>
      </div>

      {/* Quick Links */}
      <div className="admin-quick-links">
        <Link to="/admin/products" className="quick-link-card">
          <span className="ql-icon">🛍️</span>
          <span>Manage Products</span>
        </Link>
        <Link to="/admin/orders" className="quick-link-card">
          <span className="ql-icon">📋</span>
          <span>Manage Orders</span>
        </Link>
        <Link to="/admin/users" className="quick-link-card">
          <span className="ql-icon">👥</span>
          <span>Manage Users</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
