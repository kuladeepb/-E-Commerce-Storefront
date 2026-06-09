import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../api/orderApi';
import Alert from '../components/Alert';
import Loader from '../components/Loader';

const STEPS = ['Shipping', 'Payment', 'Review'];

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    cartItems, shippingAddress, saveShippingAddress,
    paymentMethod, savePaymentMethod,
    itemsPrice, shippingPrice, taxPrice, totalPrice, clearCart
  } = useCart();

  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [shipping, setShipping] = useState({
    fullName: shippingAddress?.fullName || '',
    address: shippingAddress?.address || '',
    city: shippingAddress?.city || '',
    state: shippingAddress?.state || '',
    postalCode: shippingAddress?.postalCode || '',
    country: shippingAddress?.country || 'US',
  });

  const [payment, setPayment] = useState(paymentMethod || 'Card');

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    saveShippingAddress(shipping);
    setStep(1);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    savePaymentMethod(payment);
    setStep(2);
  };

  const handlePlaceOrder = async () => {
    setLoading(true);
    setError('');
    try {
      const orderData = {
        orderItems: cartItems.map((item) => ({
          product: item._id,
          name: item.name,
          image: item.images?.[0] || '',
          price: item.price,
          qty: item.qty,
        })),
        shippingAddress: shipping,
        paymentMethod: payment,
        itemsPrice: +itemsPrice.toFixed(2),
        shippingPrice: +shippingPrice.toFixed(2),
        taxPrice: +taxPrice.toFixed(2),
        totalPrice: +totalPrice.toFixed(2),
      };

      const { data } = await createOrder(orderData);
      clearCart();
      navigate(`/orders/${data._id}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-page">
      {/* Step Indicator */}
      <div className="checkout-steps">
        {STEPS.map((s, i) => (
          <div key={s} className={`checkout-step ${i === step ? 'active' : i < step ? 'done' : ''}`}>
            <span className="step-num">{i < step ? '✓' : i + 1}</span>
            <span className="step-name">{s}</span>
            {i < STEPS.length - 1 && <div className="step-line" />}
          </div>
        ))}
      </div>

      <div className="checkout-layout">
        <div className="checkout-form-wrap">
          {/* Step 0: Shipping */}
          {step === 0 && (
            <form className="checkout-form" onSubmit={handleShippingSubmit}>
              <h2>Shipping Address</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input value={shipping.fullName} onChange={(e) => setShipping({ ...shipping, fullName: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input value={shipping.address} onChange={(e) => setShipping({ ...shipping, address: e.target.value })} required />
              </div>
              <div className="form-row-3">
                <div className="form-group">
                  <label>City</label>
                  <input value={shipping.city} onChange={(e) => setShipping({ ...shipping, city: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>State</label>
                  <input value={shipping.state} onChange={(e) => setShipping({ ...shipping, state: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Postal Code</label>
                  <input value={shipping.postalCode} onChange={(e) => setShipping({ ...shipping, postalCode: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label>Country</label>
                <input value={shipping.country} onChange={(e) => setShipping({ ...shipping, country: e.target.value })} required />
              </div>
              <button type="submit" className="btn-primary">Continue to Payment →</button>
            </form>
          )}

          {/* Step 1: Payment */}
          {step === 1 && (
            <form className="checkout-form" onSubmit={handlePaymentSubmit}>
              <h2>Payment Method</h2>
              <div className="payment-options">
                {['Card', 'PayPal', 'Cash on Delivery'].map((method) => (
                  <label key={method} className={`payment-option ${payment === method ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method}
                      checked={payment === method}
                      onChange={() => setPayment(method)}
                    />
                    <span className="payment-method-icon">
                      {method === 'Card' ? '💳' : method === 'PayPal' ? '🅿️' : '💵'}
                    </span>
                    <span>{method}</span>
                  </label>
                ))}
              </div>
              <div className="form-actions">
                <button type="button" className="btn-ghost" onClick={() => setStep(0)}>← Back</button>
                <button type="submit" className="btn-primary">Review Order →</button>
              </div>
            </form>
          )}

          {/* Step 2: Review */}
          {step === 2 && (
            <div className="checkout-review">
              <h2>Review Your Order</h2>
              {error && <Alert type="error">{error}</Alert>}

              <div className="review-section">
                <h4>Shipping To</h4>
                <p>{shipping.fullName}, {shipping.address}, {shipping.city}, {shipping.state} {shipping.postalCode}, {shipping.country}</p>
                <button className="edit-btn" onClick={() => setStep(0)}>Edit</button>
              </div>

              <div className="review-section">
                <h4>Payment</h4>
                <p>{payment}</p>
                <button className="edit-btn" onClick={() => setStep(1)}>Edit</button>
              </div>

              <div className="review-items">
                <h4>Items ({cartItems.length})</h4>
                {cartItems.map((item) => (
                  <div key={item._id} className="review-item">
                    <img src={item.images?.[0] || ''} alt={item.name} />
                    <span className="review-item-name">{item.name}</span>
                    <span>{item.qty} × ${item.price.toFixed(2)}</span>
                    <span className="review-item-subtotal">${(item.qty * item.price).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="form-actions">
                <button type="button" className="btn-ghost" onClick={() => setStep(1)}>← Back</button>
                <button
                  className="btn-place-order"
                  onClick={handlePlaceOrder}
                  disabled={loading}
                >
                  {loading ? <Loader size="xs" text="" /> : `Place Order · $${totalPrice.toFixed(2)}`}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="checkout-summary">
          <h3>Order Summary</h3>
          <div className="summary-row"><span>Subtotal</span><span>${itemsPrice.toFixed(2)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>{shippingPrice === 0 ? 'FREE' : `$${shippingPrice.toFixed(2)}`}</span></div>
          <div className="summary-row"><span>Tax</span><span>${taxPrice.toFixed(2)}</span></div>
          <div className="summary-divider" />
          <div className="summary-row summary-total"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
