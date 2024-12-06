import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
  <> <nav className='w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 fixed h-16 p-4 navbar'>
    <div className='flex justify-between items-center gap-4'>
        <h1 className='font-semibold text-[20px] '>watch</h1>
        <div className='flex gap-4 items-center justify-center'> 
        <Link to='/' className='text-[20px] menu'>Home</Link>
        <Link to='/feature'  className='text-[20px] menu'>Feature</Link>
        <Link to='/about'  className='text-[20px] menu'>About</Link>
        </div>
    </div>

  </nav>
  </>
  );
};

export default Navbar;
