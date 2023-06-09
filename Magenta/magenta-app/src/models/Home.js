import React, { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then(() => setLoggedIn(true))
      .catch((error) => console.log('Login error:', error));
  };

  const loginUser = (email, password) => {
    return fetch('http://localhost:9292/login', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Login request failed.');
        }
      })
      .then((data) => console.log('Login successful:', data))
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '1rem',
  };

  return (
    <div style={centerStyle}>
      <h1 style={headingStyle}>Magenta's PetFinder App</h1>
      {loggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Home;
