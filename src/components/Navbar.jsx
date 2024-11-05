import React, { useState, useEffect } from 'react';
import { Navbar, Button } from 'flowbite-react';

function Navbars() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Navbar container rounded>
      <Navbar.Brand href='home' className='flex '>
        <img
          src={require('../assets/Img/site logo.jpg')}
          className='h-28 rounded-full'
          alt='vingro logo'
        />
      </Navbar.Brand>
      <Navbar.Collapse className='ms-auto me-9'>
        <Navbar.Link href='#' active>
          Home
        </Navbar.Link>
        <Navbar.Link href='#'>About</Navbar.Link>
        <Navbar.Link href='#'>Services</Navbar.Link>
        <Navbar.Link href='#'>Contact</Navbar.Link>
        <Navbar.Link href='#'>Careers</Navbar.Link>
        <Navbar.Link href='#'>Blog</Navbar.Link>
      </Navbar.Collapse>
      {/* <Button onClick={handleToggle} className="ms-auto">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button> */}
    </Navbar>
  );
}

export default Navbars;
