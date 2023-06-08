import React, { useState } from "react";

function Register({ changeForm }) {
  const [newPetOwner, setNewPetOwner] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(newPetOwner);
  };

  const registerUser = (userData) => {
    fetch("https://magenta.onrender.com/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful:", data);
        changeForm(); // Switch to the login form
      })
      .catch((error) => {
        console.error("Registration error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="signup">
      <h2 className="sign">Sign Up</h2>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setNewPetOwner({ ...newPetOwner, name: e.target.value })}
        className="name"
      />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setNewPetOwner({ ...newPetOwner, email: e.target.value })}
        className="email"
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setNewPetOwner({ ...newPetOwner, password: e.target.value })}
        className="password"
      />
      <input
        type="text"
        placeholder="phone number"
        onChange={(e) => setNewPetOwner({ ...newPetOwner, phone: e.target.value })}
        className="phone"
      />
      <button type="submit" className="register">Register</button>
    </form>
  );
}

export default Register;
