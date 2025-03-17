import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingDetails = location.state || {};

  return (
    <div>
      <h1>Booking Confirmed ✅</h1>
      <p><strong>Name:</strong> {bookingDetails.name}</p>
      <p><strong>Address:</strong> {bookingDetails.address}</p>
      <p><strong>Age:</strong> {bookingDetails.age}</p>
      <p><strong>Ambulance Type:</strong> {bookingDetails.ambulanceType}</p>
      <p><strong>Vehicle Type:</strong> {bookingDetails.vehicleType}</p>

      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default BookingConfirmation;
