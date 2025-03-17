import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ No Router import here!
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import BookingConfirmation from "./components/BookingConfirmation.jsx"; // Ensure correct filename

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/confirmation" element={<BookingConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
