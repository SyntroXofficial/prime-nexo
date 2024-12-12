import { getVerificationStatus, setVerificationStatus } from './storage';
import { verifyWithApi } from './api';

export const isVerified = () => {
  try {
    return getVerificationStatus();
  } catch (error) {
    console.error('Error checking verification status:', error);
    return false;
  }
};

export const setVerified = (status) => {
  try {
    setVerificationStatus(status);
  } catch (error) {
    console.error('Error setting verification status:', error);
  }
};

export const verifyUser = async (token) => {
  try {
    const result = await verifyWithApi(token);
    if (result.verified) {
      setVerified(true);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Verification error:', error);
    return false;
  }
};