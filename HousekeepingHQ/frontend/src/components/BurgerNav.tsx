import React, { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event:any) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);



  return (
    <nav ref={ref} className="navbar" >
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
            {navbarOpen 
              ?
              (<MdClose style={{ width: '32px', height: '32px' }} />) 
              :
              (<FiMenu style={{ width: '32px', height: '32px' }} />)
            }
            </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
            <p onClick={()=> setNavbarOpen(false)}>Home</p>
            <p onClick={()=> setNavbarOpen(false)}>About</p>
            <p onClick={()=> setNavbarOpen(false)}>Login</p>
        </ul>
    </nav>
  
  );
};
export default Navbar;
