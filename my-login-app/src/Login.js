import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Import CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // Implement login functionality here
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        If new user,{' '}
        <Link to="/signup">
          <strong>register here</strong>
        </Link>
      </p>
    </div>
  );
};

export default Login;
