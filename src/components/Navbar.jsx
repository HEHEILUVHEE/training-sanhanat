// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
         
      <p>NVC Training Center</p>
        <div>
          
          <NavLink to="/" className="mx-4 text-white">หน้าหลัก</NavLink>
          
          <NavLink to="/course" className="mx-4 text-white">หลักสูตรการสอน</NavLink>
          
          <NavLink to="/contact" className="mx-4 text-white">ติดต่อ</NavLink>
          
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
