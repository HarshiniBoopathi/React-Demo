import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { MantineProvider } from '@mantine/core';
import LoginPage from './components/LoginPage.jsx';
import DashboardPage from './components/DashboardPage.jsx';
import MainLayout from './components/MainLayout.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';

function App() {
  return (
    <Provider store={store}>
       <MantineProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="home" element={<h2>Home</h2>} />
            <Route path="dashboard" element={<DashboardPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegistrationPage />} />
        </Routes>
      </Router>
      </MantineProvider>
    </Provider>
  );
}

export default App;
