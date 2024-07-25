import axios from 'axios';

const API_URL = 'https://reqres.in/api';

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

export const getUserDetails = async (userId) => {
  const response = await axios.get(`${API_URL}/users/${userId}`);
  return response.data.data;
};
