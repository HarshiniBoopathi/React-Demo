import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import MyAppBar from './AppBar';

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <MyAppBar />
      <main>
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;
