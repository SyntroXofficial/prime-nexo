import React, { useState, useEffect } from 'react';
import StaffLogin from '../features/staff/components/StaffLogin';
import StaffDashboard from '../features/staff/components/StaffDashboard';
import { validateStaffCredentials } from '../features/staff/utils/staffAuth';
import { getVisitors } from '../features/staff/utils/visitorTracking';

export default function StaffOnly() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVisitors = async () => {
      try {
        const visitorData = await getVisitors();
        setVisitors(visitorData);
      } catch (err) {
        console.error('Error fetching visitors:', err);
        setError('Failed to load visitor data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitors();
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

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return <StaffDashboard visitors={visitors} />;
}