import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md bg-[#FEFAE0]/90">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Icon Logo */}
        <div className="text-2xl text-[#BC6C25]">
          <FontAwesomeIcon icon={faLaptopCode} />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 font-medium text-[#283618]">
          <li>
            <a href="#hero" className="hover:text-[#DDA15E] transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#medium-articles" className="hover:text-[#DDA15E] transition-colors duration-200">Blog</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#DDA15E] transition-colors duration-200">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#DDA15E] transition-colors duration-200">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
