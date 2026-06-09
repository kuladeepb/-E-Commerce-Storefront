const Loader = ({ size = 'md', text = 'Loading...' }) => (
  <div className={`loader-wrap loader-${size}`}>
    <div className="spinner"></div>
    {text && <p className="loader-text">{text}</p>}
  </div>
);

export default Loader;
