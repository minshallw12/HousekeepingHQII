import React, { useState } from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="navbar">
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
            {navbarOpen ? 'close' : 'open'}
            </button>
        <ul>
          
        </ul>
    </nav>
  
  );
};
export default Navbar;
