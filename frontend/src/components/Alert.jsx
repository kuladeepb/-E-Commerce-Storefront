const Alert = ({ type = 'error', children }) => (
  <div className={`alert alert-${type}`}>
    <span className="alert-icon">
      {type === 'error' ? '⚠️' : type === 'success' ? '✅' : type === 'warning' ? '🔔' : 'ℹ️'}
    </span>
    <span>{children}</span>
  </div>
);

export default Alert;
