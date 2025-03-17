import React, { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged out successfully!");
    window.location.href = "/"; // Redirect to home after logout
  };

  return (
    <div>
      <h2>Profile Page</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.fullName || "User"}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <br />
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
}

export default Profile;
