import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch('http://localhost:5005/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed, please try again');
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        {Array.from("Welcome to Freelancer Hub").map((char, index) => (
          <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            {char}
          </span>
        ))}
      </header>
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your email" />
          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Signup here</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
