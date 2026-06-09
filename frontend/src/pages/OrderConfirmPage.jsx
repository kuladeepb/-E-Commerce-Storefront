import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOrderById } from '../api/orderApi';
import Loader from '../components/Loader';
import Alert from '../components/Alert';

const OrderConfirmPage = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await getOrderById(id);
        setOrder(data);
      } catch {
        setError('Order not found');
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  if (loading) return <Loader text="Loading order..." />;
  if (error) return <Alert type="error">{error}</Alert>;
  if (!order) return null;

  return (
    <div className="order-confirm-page">
      <div className="order-confirm-card">
        <div className="order-success-header">
          <div className="order-success-icon">✅</div>
          <h1>Order Confirmed!</h1>
          <p>Thank you for your purchase. Your order has been placed successfully.</p>
          <p className="order-id-label">Order ID: <strong>#{order._id.slice(-8).toUpperCase()}</strong></p>
        </div>

        <div className="order-details-grid">
          <div className="order-detail-box">
            <h3>Shipping To</h3>
            <p>{order.shippingAddress.fullName}</p>
            <p>{order.shippingAddress.address}</p>
            <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}</p>
            <p>{order.shippingAddress.country}</p>
          </div>

          <div className="order-detail-box">
            <h3>Payment</h3>
            <p>{order.paymentMethod}</p>
            <p className="status-badge status-paid">✓ Paid</p>
          </div>

          <div className="order-detail-box">
            <h3>Status</h3>
            <p className={`status-badge status-${order.status?.toLowerCase()}`}>{order.status}</p>
            <p className="order-date">Placed: {new Date(order.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="order-items-list">
          <h3>Items Ordered</h3>
          {order.orderItems.map((item, i) => (
            <div key={i} className="order-line-item">
              <img src={item.image} alt={item.name} />
              <span className="order-item-name">{item.name}</span>
              <span>{item.qty} × ${item.price.toFixed(2)}</span>
              <span className="order-item-total">${(item.qty * item.price).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="order-totals">
          <div className="total-row"><span>Subtotal</span><span>${order.itemsPrice.toFixed(2)}</span></div>
          <div className="total-row"><span>Shipping</span><span>{order.shippingPrice === 0 ? 'FREE' : `$${order.shippingPrice.toFixed(2)}`}</span></div>
          <div className="total-row"><span>Tax</span><span>${order.taxPrice.toFixed(2)}</span></div>
          <div className="total-row total-grand"><span>Total</span><span>${order.totalPrice.toFixed(2)}</span></div>
        </div>

        <div className="order-confirm-actions">
          <Link to="/orders" className="btn-primary">View All Orders</Link>
          <Link to="/products" className="btn-ghost">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmPage;
