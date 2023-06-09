import React, { useState } from "react";

function Login({ changeForm }) {
  const [loginData, setLoginData] = useState({
    name: "",
    password: ""
  });
  const [userData, setUserData] = useState(null); // State to store the user data

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(loginData);
  };

  const loginUser = (userData) => {
    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login successful:", data);
        if (data.success) {
          // Update the user data state
          setUserData(data.user);
        } else {
          console.log("Wrong details");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  // Render the user data if available
  const renderUserData = () => {
    if (userData) {
      return (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Render other user data properties */}
        </div>
      );
    }
    return null; // Render nothing if user data is not available
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="signin">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      {/* Render user data */}
      {renderUserData()}
    </div>
  );
}

export default Login;
