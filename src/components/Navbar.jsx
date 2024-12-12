import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'bg-violet-600/20 text-violet-400' : '';
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50 px-6 py-4 bg-black/90 backdrop-blur-lg border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600">
          Prime Nexo
        </Link>
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/steam" className={`nav-link ${isActive('/steam')}`}>Steam</Link>
          <Link to="/accounts" className={`nav-link ${isActive('/accounts')}`}>Accounts</Link>
          <Link to="/methods" className={`nav-link ${isActive('/methods')}`}>Methods</Link>
          <Link to="/other-services" className={`nav-link ${isActive('/other-services')}`}>Services</Link>
          <Link to="/members" className={`nav-link ${isActive('/members')}`}>Members</Link>
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
        </div>
      </div>
    </motion.nav>
  );
}