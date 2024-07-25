import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../redux/authSlice';
import { login } from '../services/authService';
import Swal from 'sweetalert2';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { email: username, password: password };
      const response = await login(data);
      dispatch(loginSuccess({ token: response.token, username: data.email }));
      Swal.fire('Success', 'Logged in successfully', 'success');
      navigate('/dashboard');
    } catch (error) {
      Swal.fire('Error', 'Login failed', 'error');
    }
  };

  return (
<div className="login-container">
<div className="login-card">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
