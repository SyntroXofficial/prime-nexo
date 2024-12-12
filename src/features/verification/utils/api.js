const API_URL = 'https://day27.vercel.app/api';

export const verifyWithApi = async (token) => {
  try {
    const response = await fetch(`${API_URL}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
      credentials: 'include'
    });

    if (!response.ok) {
      throw new Error('Verification request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('API verification error:', error);
    throw error;
  }
};