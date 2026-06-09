import { useEffect, useState } from 'react';
import { getUsers, updateUser, deleteUser } from '../../api/userApi';
import Loader from '../../components/Loader';
import Alert from '../../components/Alert';
import Pagination from '../../components/Pagination';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');
  const [updatingId, setUpdatingId] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data } = await getUsers({ page, keyword: search });
      setUsers(data.users);
      setPages(data.pages);
      setTotal(data.total);
    } catch {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, [page, search]);

  const handleRoleToggle = async (user) => {
    const newRole = user.role === 'admin' ? 'user' : 'admin';
    if (!window.confirm(`Change ${user.name}'s role to ${newRole}?`)) return;
    setUpdatingId(user._id);
    try {
      await updateUser(user._id, { role: newRole });
      setUsers((prev) => prev.map((u) => u._id === user._id ? { ...u, role: newRole } : u));
    } catch {
      alert('Failed to update role');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (user) => {
    if (user.role === 'admin') return alert('Cannot delete admin users');
    if (!window.confirm(`Delete user "${user.name}"? This cannot be undone.`)) return;
    try {
      await deleteUser(user._id);
      fetchUsers();
    } catch {
      alert('Failed to delete user');
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <h1 className="admin-title">Users</h1>
          <p className="admin-subtitle">{total} registered users</p>
        </div>
      </div>

      {error && <Alert type="error">{error}</Alert>}

      <div className="admin-toolbar">
        <input
          type="text"
          className="admin-search"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
        />
      </div>

      {loading ? (
        <Loader text="Loading users..." />
      ) : (
        <>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <div className="table-user-cell">
                        <span className="table-user-avatar" style={{ background: user.role === 'admin' ? '#6366f1' : '#10b981' }}>
                          {user.name?.charAt(0).toUpperCase()}
                        </span>
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td className="table-user-email">{user.email}</td>
                    <td>
                      <span className={`role-badge role-${user.role}`}>{user.role}</span>
                    </td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      <div className="table-actions">
                        <button
                          className="btn-table-edit"
                          onClick={() => handleRoleToggle(user)}
                          disabled={updatingId === user._id}
                        >
                          {user.role === 'admin' ? 'Make User' : 'Make Admin'}
                        </button>
                        {user.role !== 'admin' && (
                          <button className="btn-table-delete" onClick={() => handleDelete(user)}>
                            Delete
                          </button>
                        )}
                      </div>
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

export default AdminUsers;
