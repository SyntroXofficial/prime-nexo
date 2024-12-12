import React, { useState, useEffect } from 'react';
import StaffLogin from '../features/staff/components/StaffLogin';
import StaffDashboard from '../features/staff/components/StaffDashboard';
import { validateStaffCredentials } from '../features/staff/utils/staffAuth';
import { getVisitors } from '../features/staff/utils/visitorTracking';

export default function StaffOnly() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    setVisitors(getVisitors());
  }, []);

  const handleLogin = (credentials) => {
    if (validateStaffCredentials(credentials)) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return <StaffLogin onSubmit={handleLogin} error={error} />;
  }

  return <StaffDashboard visitors={visitors} />;
}