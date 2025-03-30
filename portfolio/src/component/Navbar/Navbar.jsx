import React from 'react'

const Navbar = () => {
  // Function to handle smooth scrolling
  const handleScroll = (e, sectionId) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Danny</div>
        <div className='space-x-6'>
          <a 
            href='#home' 
            className='hover:text-gray-400 cursor-pointer'
            onClick={(e) => handleScroll(e, 'home')}
          >
            Home
          </a>
          <a 
            href='#' 
            className='hover:text-gray-400 cursor-pointer'
            onClick={(e) => handleScroll(e, 'about')}
          >
            About Me
          </a>
          <a 
            href='#services' 
            className='hover:text-gray-400 cursor-pointer'
            onClick={(e) => handleScroll(e, 'services')}
          >
            Services
          </a>
          <a 
            href='#projects' 
            className='hover:text-gray-400 cursor-pointer'
            onClick={(e) => handleScroll(e, 'projects')}
          >
            Projects
          </a>
          <a 
            href='#contact' 
            className='hover:text-gray-400 cursor-pointer'
            onClick={(e) => handleScroll(e, 'contact')}
          >
            Contact
          </a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white
          hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;