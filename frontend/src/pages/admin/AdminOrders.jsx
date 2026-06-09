import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllOrders, updateOrderStatus } from '../../api/orderApi';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import Pagination from '../../components/Pagination';

const STATUS_OPTIONS = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
const STATUS_COLORS = {
  Pending: '#f59e0b', Processing: '#6366f1',
  Shipped: '#3b82f6', Delivered: '#10b981', Cancelled: '#ef4444',
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [statusFilter, setStatusFilter] = useState('');
  const [updating, setUpdating] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { data } = await getAllOrders({ page, limit: 20, status: statusFilter || undefined });
      setOrders(data.orders);
      setPages(data.pages);
      setTotal(data.total);
    } catch {
      setError('Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchOrders(); }, [page, statusFilter]);

  const handleStatusChange = async (orderId, newStatus) => {
    setUpdating(orderId);
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders((prev) =>
        prev.map((o) => (o._id === orderId ? { ...o, status: newStatus } : o))
      );
    } catch {
      alert('Failed to update status');
    } finally {
      setUpdating(null);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-title">Orders</h1>
          <p className="admin-subtitle">{total} total orders</p>
        </div>
      </div>

      {error && <Alert type="error">{error}</Alert>}

      <div className="admin-toolbar">
        <div className="status-filter-tabs">
          <button className={`status-tab ${!statusFilter ? 'active' : ''}`} onClick={() => { setStatusFilter(''); setPage(1); }}>All</button>
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s}
              className={`status-tab ${statusFilter === s ? 'active' : ''}`}
              style={statusFilter === s ? { background: STATUS_COLORS[s] + '22', color: STATUS_COLORS[s] } : {}}
              onClick={() => { setStatusFilter(s); setPage(1); }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <Loader text="Loading orders..." />
      ) : (
        <>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <Link to={`/orders/${order._id}`} className="table-link">
                        #{order._id.slice(-8).toUpperCase()}
                      </Link>
                    </td>
                    <td>
                      <div className="table-user-cell">
                        <span className="table-user-avatar">{order.user?.name?.charAt(0).toUpperCase()}</span>
                        <div>
                          <div>{order.user?.name}</div>
                          <div className="table-user-email">{order.user?.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    <td>{order.orderItems?.length}</td>
                    <td>${order.totalPrice?.toFixed(2)}</td>
                    <td>
                      <span
                        className="status-pill"
                        style={{ background: STATUS_COLORS[order.status] + '22', color: STATUS_COLORS[order.status] }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <select
                        className="status-select"
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        disabled={updating === order._id}
                      >
                        {STATUS_OPTIONS.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination page={page} pages={pages} onPageChange={setPage} />
        </>
      )}
    </div>
  );
};

export default AdminOrders;
