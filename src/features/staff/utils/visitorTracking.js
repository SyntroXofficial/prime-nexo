export const logVisitor = (isVerified) => {
  const visitors = JSON.parse(localStorage.getItem('visitors') || '[]');
  const newVisitor = {
    ip: '0.0.0.0', // In a real app, this would be the actual IP
    source: document.referrer || 'Direct',
    browser: navigator.userAgent,
    os: navigator.platform,
    timestamp: new Date().toISOString(),
    verified: isVerified
  };
  visitors.push(newVisitor);
  localStorage.setItem('visitors', JSON.stringify(visitors));
};

export const getVisitors = () => {
  return JSON.parse(localStorage.getItem('visitors') || '[]');
};