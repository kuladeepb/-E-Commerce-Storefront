import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMyOrders } from '../api/orderApi';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const STATUS_COLORS = {
  Pending: '#f59e0b',
  Processing: '#6366f1',
  Shipped: '#3b82f6',
  Delivered: '#10b981',
  Cancelled: '#ef4444',
};

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await getMyOrders();
        setOrders(data);
      } catch {
        setError('Failed to load orders');
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <Loader text="Loading your orders..." />;

  return (
    <div className="orders-page">
      <h1 className="page-title">My Orders</h1>

      {error && <Alert type="error">{error}</Alert>}

      {orders.length === 0 ? (
        <div className="empty-state">
          <span className="empty-icon">📦</span>
          <h2>No orders yet</h2>
          <p>When you place orders, they'll appear here.</p>
          <Link to="/products" className="btn-primary">Start Shopping</Link>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-card-header">
                <div>
                  <span className="order-card-id">#{order._id.slice(-8).toUpperCase()}</span>
                  <span className="order-card-date">{new Date(order.createdAt).toLocaleDateString()}</span>
                </div>
                <span
                  className="order-status-pill"
                  style={{ background: STATUS_COLORS[order.status] + '22', color: STATUS_COLORS[order.status] }}
                >
                  {order.status}
                </span>
              </div>

              <div className="order-card-items">
                {order.orderItems.slice(0, 3).map((item, i) => (
                  <img key={i} src={item.image} alt={item.name} className="order-item-thumb" title={item.name} />
                ))}
                {order.orderItems.length > 3 && (
                  <span className="order-items-more">+{order.orderItems.length - 3} more</span>
                )}
              </div>

              <div className="order-card-footer">
                <div className="order-card-meta">
                  <span>{order.orderItems.length} item{order.orderItems.length !== 1 ? 's' : ''}</span>
                  <span className="order-card-total">${order.totalPrice.toFixed(2)}</span>
                </div>
                <Link to={`/orders/${order._id}`} className="btn-ghost-sm">View Details →</Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
