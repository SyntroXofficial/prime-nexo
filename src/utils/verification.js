export const isVerified = () => {
  // Check if user is verified through multiple methods
  const localVerification = localStorage.getItem('verified') === 'true';
  const sessionVerification = sessionStorage.getItem('verified') === 'true';
  const cookieVerification = document.cookie.includes('day27_verified=true');

  // All verification methods must pass
  return localVerification && sessionVerification && cookieVerification;
};

export const setVerified = (status) => {
  if (status) {
    localStorage.setItem('verified', 'true');
    sessionStorage.setItem('verified', 'true');
    document.cookie = 'day27_verified=true; path=/; secure; samesite=strict';
  } else {
    localStorage.removeItem('verified');
    sessionStorage.removeItem('verified');
    document.cookie = 'day27_verified=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
};

export const verifyUser = async (token) => {
  try {
    const response = await fetch('https://day27.vercel.app/api/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Verification failed');
    }

    const data = await response.json();
    if (data.verified) {
      setVerified(true);
      return true;
    }

    return false;
  } catch (error) {
    console.error('Verification error:', error);
    return false;
  }
};