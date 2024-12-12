import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../../services/firebase';

export function useStaffData() {
  const [visitors, setVisitors] = useState([]);
  const [stats, setStats] = useState({
    totalVisitors: 0,
    verifiedUsers: 0,
    activeUsers: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Real-time visitors subscription
      const visitorsQuery = query(
        collection(db, 'visitors'),
        orderBy('timestamp', 'desc')
      );

      const unsubscribe = onSnapshot(visitorsQuery, (snapshot) => {
        const visitorData = [];
        let verified = 0;
        let active = 0;

        snapshot.forEach((doc) => {
          const data = { id: doc.id, ...doc.data() };
          visitorData.push(data);
          if (data.verified) verified++;
          if (data.isActive) active++;
        });

        setVisitors(visitorData);
        setStats({
          totalVisitors: visitorData.length,
          verifiedUsers: verified,
          activeUsers: active
        });
        setIsLoading(false);
      }, (error) => {
        console.error('Error fetching visitors:', error);
        setError(error.message);
        setIsLoading(false);
      });

      return () => unsubscribe();
    } catch (error) {
      console.error('Error setting up visitors listener:', error);
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  return { visitors, stats, isLoading, error };
}