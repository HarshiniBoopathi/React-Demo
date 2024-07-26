import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetails } from '../services/authService';
import { setUserDetails } from '../redux/authSlice';
import Swal from 'sweetalert2';
import MantineTable from './MantineTable.jsx'


const DashboardPage = () => {
  const username = useSelector((state) => state.auth.username);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = 2; // Static userId for demo
        const response = await getUserDetails(userId);
        dispatch(setUserDetails(response));
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch user details', 'error');
      }
    };

    fetchUserDetails();
  }, [dispatch]);

  return (
    <div className="login-container">
      <MantineTable />
            <div className="login-card">
      <h2>Dashboard</h2>
      <p>Username: {username}</p>
      {userDetails && (
        <div>
          <h3>User Details</h3>
          <p>Name: {userDetails.first_name} {userDetails.last_name}</p>
          <p>Email: {userDetails.email}</p>
          <img src={userDetails.avatar} alt="Avatar" />
        </div>
      )}
    </div>
    </div>
  );
};

export default DashboardPage;
