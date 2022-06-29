import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './header.scss';

interface IMenuItem {
  name: string;
  href: string;
  label: string;
}

export const HEADERS: Array<IMenuItem> = [
  {
    name: '1',
    href: '/playing',
    label: 'Playing',
  },
  {
    name: '2',
    href: '/popular',
    label: 'Popular',
  },
  {
    name: '3',
    href: '/kids',
    label: 'For Kids',
  },
  {
    name: '4',
    href: '/search',
    label: 'Search',
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [openMobile, setOpenMobile] = useState<boolean>();
  return (
    <>
      <header className="header fixed">
        <div className="logo-header">
          <div className="box-img-flex">
            <h3>Movies</h3>
          </div>
        </div>
        <div className="menu">
          <ul>
            {HEADERS.map(item => (
              <li key={item.name} className={location.pathname === item.href ? 'active' : ''}>
                <NavLink to={item.href}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <a onClick={() => setOpenMobile(true)} className="btn-menu-mobile" href="#">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </header>

      <div className={`mobile-menu ${openMobile ? 'show' : ''}`}>
        <div className="m-menu__title">
          <a onClick={() => setOpenMobile(false)} href="#" className="m-menu-close">
            +
          </a>
        </div>
        <ul>
          {HEADERS.map(item => (
            <li key={item.name}>
              <NavLink to={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={`overlay-menu ${openMobile ? 'active' : ''}`}></div>
    </>
  );
};

export default Header;
