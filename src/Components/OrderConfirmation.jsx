import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

function OrderConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const {setCartItems} = useContext(ProductContext);

  const { type, product, items } = location.state || {};
  const orderedItems = type === 'single' ? [product] : items || [];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    house: "",
    locality: "",
    city: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const total = orderedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, house, locality, city, pincode } = formData;
    if (!name || !phone || !house || !locality || !city || !pincode) {
      alert("Please fill in all address fields.");
      return;
    }

    if (type === 'cart') {
      setCartItems([]);
    }
    alert("Order placed successfully!");
    navigate('/');
  }

  return (
    <div className="px-5 py-5" style={{height : '100vh', overflow : 'auto'}}>
      <h2 className="mb-4">Order Summary</h2>

      {orderedItems.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <div className="mb-4">
          {orderedItems.map((item, index) => (
            <div
              key={index}
              className="border rounded p-3 mb-3 shadow-sm d-flex justify-content-between align-items-center"
            >
              <div>
                <h5 className="mb-1">{item.name}</h5>
                <p className="mb-0">
                  Qty: {item.quantity} × ₹{item.price}
                </p>
              </div>
              <div className="fw-bold">₹{item.quantity * item.price}</div>
            </div>
          ))}
          <h4 className="text-end">Total: ₹{total}</h4>
        </div>
      )}

      <hr />
      <h3 className="mb-3">Delivery Details</h3>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Address Fields */}
        <div className="col-12 col-md-6">
          <label className="form-label">House No.</label>
          <input
            type="text"
            className="form-control"
            name="house"
            value={formData.house}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-12 col-md-6">
          <label className="form-label">Area / Locality</label>
          <input
            type="text"
            className="form-control"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Pincode</label>
          <input
            type="text"
            className="form-control"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
            pattern="\d{6}"
            title="Enter a valid 6-digit pincode"
          />
        </div>

        {/* Payment Method */}
        <div className="col-12">
        <label className="form-label">Payment Method</label>
        <select
            className="form-select"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
        >
            <option value="cod">Cash on Delivery</option>
            <option value="upi">UPI</option>
            <option value="card">Credit / Debit Card</option>
        </select>
        </div>

        {/* Conditional Payment Inputs */}
        {formData.paymentMethod === "upi" && (
        <div className="col-12">
            <label className="form-label">UPI ID</label>
            <input
            type="text"
            className="form-control"
            name="upiId"
            value={formData.upiId || ""}
            onChange={handleChange}
            placeholder="example@upi"
            required
            />
        </div>
        )}

        {formData.paymentMethod === "card" && (
        <>
            <div className="col-md-6">
            <label className="form-label">Card Number</label>
            <input
                type="text"
                className="form-control"
                name="cardNumber"
                value={formData.cardNumber || ""}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                required
            />
            </div>
            <div className="col-md-3">
            <label className="form-label">Expiry Date</label>
            <input
                type="month"
                className="form-control"
                name="expiry"
                value={formData.expiry || ""}
                onChange={handleChange}
                required
            />
            </div>
            <div className="col-md-3">
            <label className="form-label">CVV</label>
            <input
                type="password"
                className="form-control"
                name="cvv"
                value={formData.cvv || ""}
                onChange={handleChange}
                required
                maxLength={4}
                placeholder="123"
            />
            </div>
        </>
        )}


        <div className="col-12 text-end">
          <button type="submit" className="btn btn-success px-4">
            Confirm Order
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderConfirmation;
