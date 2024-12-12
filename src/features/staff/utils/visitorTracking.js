import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../services/firebase';

// Get visitor data
export const getVisitors = async () => {
  try {
    const visitorsRef = collection(db, 'visitors');
    const q = query(visitorsRef, orderBy('timestamp', 'desc'));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      timestamp: doc.data().timestamp?.toDate().toISOString()
    }));
  } catch (error) {
    console.error('Error getting visitors:', error);
    return [];
  }
};

// Log visitor data
export const logVisitor = async (isVerified) => {
  try {
    const visitorData = {
      ip: '0.0.0.0', // In production, this would be the actual IP
      source: document.referrer || 'Direct',
      browser: navigator.userAgent,
      os: navigator.platform,
      timestamp: serverTimestamp(),
      verified: isVerified,
      isActive: true
    };

    await addDoc(collection(db, 'visitors'), visitorData);
  } catch (error) {
    console.error('Error logging visitor:', error);
  }
};