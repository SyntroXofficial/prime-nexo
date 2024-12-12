const STORAGE_KEYS = {
  VERIFIED: 'verified',
  VERIFICATION_TOKEN: 'verification_token',
  LAST_VERIFICATION: 'last_verification'
};

export const getVerificationStatus = () => {
  try {
    // Check all storage methods for verification status
    const localVerification = localStorage.getItem(STORAGE_KEYS.VERIFIED) === 'true';
    const sessionVerification = sessionStorage.getItem(STORAGE_KEYS.VERIFIED) === 'true';
    const cookieVerification = document.cookie.includes('day27_verified=true');

    return localVerification && sessionVerification && cookieVerification;
  } catch (error) {
    console.error('Error getting verification status:', error);
    return false;
  }
};

export const setVerificationStatus = (status) => {
  try {
    if (status) {
      localStorage.setItem(STORAGE_KEYS.VERIFIED, 'true');
      sessionStorage.setItem(STORAGE_KEYS.VERIFIED, 'true');
      document.cookie = 'day27_verified=true; path=/; secure; samesite=strict';
      localStorage.setItem(STORAGE_KEYS.LAST_VERIFICATION, new Date().toISOString());
    } else {
      localStorage.removeItem(STORAGE_KEYS.VERIFIED);
      sessionStorage.removeItem(STORAGE_KEYS.VERIFIED);
      document.cookie = 'day27_verified=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      localStorage.removeItem(STORAGE_KEYS.LAST_VERIFICATION);
    }
  } catch (error) {
    console.error('Error setting verification status:', error);
  }
};