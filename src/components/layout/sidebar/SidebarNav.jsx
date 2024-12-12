import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import { 
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  WrenchIcon,
  FilmIcon,
  CloudArrowUpIcon,
  ExclamationTriangleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const menuItems = [
  { icon: HomeIcon, label: 'Home', path: '/' },
  { icon: BookOpenIcon, label: 'Library', path: '/library' },
  { icon: UserGroupIcon, label: 'Accounts', path: '/accounts' },
  { icon: WrenchIcon, label: 'Methods', path: '/methods' },
  { icon: FilmIcon, label: 'Stremio', path: '/stremio' },
  { icon: CloudArrowUpIcon, label: 'GeForce Now', path: '/geforce-now' },
  { icon: ExclamationTriangleIcon, label: 'Warning', path: '/warning' },
  { icon: QuestionMarkCircleIcon, label: 'FAQ', path: '/faq' }
];

export default function SidebarNav({ isCollapsed }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="p-4 h-[calc(100vh-88px)] overflow-y-auto">
      {menuItems.map((item) => (
        <SidebarItem
          key={item.path}
          path={item.path}
          icon={item.icon}
          label={item.label}
          isActive={isActive(item.path)}
          isCollapsed={isCollapsed}
        />
      ))}
    </nav>
  );
}