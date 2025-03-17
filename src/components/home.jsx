import React, { useState } from "react";
import RideBookingModal from "./RideBookingModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>Welcome to Ambuk</h1>
      <p>Your trusted ambulance booking service.</p>
      
      <button onClick={() => setIsModalOpen(true)}>Book an Ambulance</button>

      {/* Ride Booking Modal */}
      <RideBookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default Home;
