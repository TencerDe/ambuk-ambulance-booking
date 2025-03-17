import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RideBookingModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    age: "",
    ambulanceType: "With Medical Assistance",
    vehicleType: "Van",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: formData }); // Redirect with form data
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Book an Ambulance</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <br />
          <input type="text" name="address" placeholder="Your Address" value={formData.address} onChange={handleChange} required />
          <br />
          <input type="number" name="age" placeholder="Your Age" value={formData.age} onChange={handleChange} required />
          <br />
          <label>Ambulance Type:</label>
          <select name="ambulanceType" value={formData.ambulanceType} onChange={handleChange}>
            <option>With Medical Assistance</option>
            <option>Without Medical Assistance</option>
          </select>
          <br />
          <label>Vehicle Type:</label>
          <select name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
            <option>Van</option>
            <option>Mini Bus</option>
          </select>
          <br />
          <button type="submit">Book Now</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default RideBookingModal;
