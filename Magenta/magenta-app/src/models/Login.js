import React, { useState } from "react";

function Login({ changeForm }) {
  const [loginData, setLoginData] = useState({
    name: "",
    password: ""
  });
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

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
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Login request failed.");
        }
      })
      .then((data) => {
        console.log("Login successful:", data);
        if (data.success) {
          setUserData(data.user);
        } else {
          setError("Wrong details");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        setError("An error occurred during login.");
      });
  };

  const renderUserData = () => {
    if (userData) {
      return (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      );
    }
    return null;
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
      {error && <p>{error}</p>}
      {renderUserData()}
    </div>
  );
}

export default Login;
