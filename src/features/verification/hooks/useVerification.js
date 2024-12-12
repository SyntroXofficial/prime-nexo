import { useState, useEffect } from 'react';
import { verifyUser, isVerified, setVerified } from '../utils/verificationUtils';

export function useVerification() {
  const [isVerifiedState, setIsVerifiedState] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkVerification = async () => {
      try {
        const verified = isVerified();
        setIsVerifiedState(verified);
      } catch (err) {
        console.error('Verification check failed:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    checkVerification();
  }, []);

  const verify = async (token) => {
    try {
      setIsLoading(true);
      const success = await verifyUser(token);
      setIsVerifiedState(success);
      return success;
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isVerified: isVerifiedState,
    isLoading,
    error,
    verify,
    setVerified: (status) => {
      setVerified(status);
      setIsVerifiedState(status);
    }
  };
}