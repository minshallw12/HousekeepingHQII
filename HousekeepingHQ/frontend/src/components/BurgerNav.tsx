import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
            {navbarOpen ? 'close' : 'open'}
            </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
            {/* <NavLink to={''} onClick={() => setNavbarOpen(false)}> Login </NavLink> */}
        </ul>
    </nav>
  
  );
};
export default Navbar;
