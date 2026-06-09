const Rating = ({ value, count, size = 'sm' }) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i + 1 <= Math.floor(value);
    const half = !filled && i < value;
    return filled ? 'full' : half ? 'half' : 'empty';
  });

  return (
    <div className={`rating rating-${size}`}>
      <div className="stars">
        {stars.map((type, i) => (
          <span key={i} className={`star star-${type}`}>
            {type === 'full' ? '★' : type === 'half' ? '⯨' : '☆'}
          </span>
        ))}
      </div>
      {count !== undefined && (
        <span className="rating-count">({count})</span>
      )}
    </div>
  );
};

export default Rating;
