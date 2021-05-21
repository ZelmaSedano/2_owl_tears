import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  // state & stateModifier
  // State is set to false
  const [open, setOpen] = useState(false);

  // switches value of State to true
  const handleClick = () => {
    setOpen(!open);
  };

  // changes the value of State to false when you click an link
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className='navbar'>
      {/* next time, add a wrapper for the entire navbar, so we can reposition it more easily */}
      <div className='header-wrapper'>
        <div className='logo'>
          <Link to='/' className='nav-logo'>
            OwlTears
          </Link>
        </div>

        {/* Hamburger Icon */}
        {/* handleClick function changes value of open to true */}
        <div onClick={handleClick} className='hamburger'>
          {/* changes icon from hamburger to x when clicked */}
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Menu */}
      {/* 2) nav-list : navigation wrapper */}
      <ul className={open ? 'menu active' : 'menu'}>
        {/* Links - each link has an li w/ class */}
        <li className='nav-item'>
          {/* everytime you click a link, the menu closes */}
          <Link to='/' className='nav-link' onClick={closeMenu}>
            Home
          </Link>
        </li>

        {/* Link is React Router <a> anchor; it uses to='' */}
        <li className='nav-item'>
          <Link to='/about' className='nav-link' onClick={closeMenu}>
            About
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/shop' className='nav-link' onClick={closeMenu}>
            Shop
          </Link>
        </li>

        <li className='last-nav-item'>
          <Link to='/contact' className='nav-link' onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
