import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { updateMe } from '../api/authApi';
import Alert from '../components/Alert';
import Loader from '../components/Loader';

const ProfilePage = () => {
  const { userInfo, login } = useAuth();
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (userInfo) setForm((f) => ({ ...f, name: userInfo.name, email: userInfo.email }));
  }, [userInfo]);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password && form.password !== form.confirmPassword) {
      return setError('Passwords do not match');
    }
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      const payload = { name: form.name, email: form.email };
      if (form.password) payload.password = form.password;
      const { data } = await updateMe(payload);
      login(data);
      setSuccess('Profile updated successfully!');
      setForm((f) => ({ ...f, password: '', confirmPassword: '' }));
    } catch (err) {
      setError(err.response?.data?.message || 'Update failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar-lg">{userInfo?.name?.charAt(0).toUpperCase()}</div>
          <div>
            <h1 className="profile-name">{userInfo?.name}</h1>
            <p className="profile-email">{userInfo?.email}</p>
            <span className={`role-badge role-${userInfo?.role}`}>{userInfo?.role}</span>
          </div>
        </div>

        {error && <Alert type="error">{error}</Alert>}
        {success && <Alert type="success">{success}</Alert>}

        <form className="profile-form" onSubmit={handleSubmit}>
          <h2 className="form-section-title">Edit Profile</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="profile-name">Full Name</label>
              <input id="profile-name" name="name" type="text" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="profile-email">Email</label>
              <input id="profile-email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <h2 className="form-section-title">Change Password <span className="optional-tag">(optional)</span></h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="profile-password">New Password</label>
              <input id="profile-password" name="password" type="password" placeholder="Leave blank to keep current" value={form.password} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="profile-confirm">Confirm Password</label>
              <input id="profile-confirm" name="confirmPassword" type="password" placeholder="Repeat new password" value={form.confirmPassword} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? <Loader size="xs" text="" /> : 'Save Changes'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
