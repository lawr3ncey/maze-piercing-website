import React, { useState } from 'react';
import axios from 'axios';
import Logo from '../../components/Admin/Logo'; // 👈 adjust path if needed
import '../../styles/Admin/AdminLogin.css';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        email,
        password,
      });
      localStorage.setItem('adminToken', res.data.token);
      alert('Login successful!');
      window.location.href = '/admin';
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-background">
      <div className="login-main-wrapper">
        {/* Left: Logo */}
        <div className="logo-wrapper">
          <Logo />
        </div>

        {/* Right: Welcome + Login */}
        <div className="login-content-wrapper">
          <div className="welcome-wrapper">
            <h1 className="admin-welcome">Welcome to the shadows, Admin</h1>
            <p className="admin-tagline">Where Style Meets Security.</p>
          </div>

          <div className="login-wrapper">
            <div className="login-container">
              <h2>Admin Login</h2>
              {error && <p className="error">{error}</p>}
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
