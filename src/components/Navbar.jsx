// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import Contact from './../pages/Contact';

const Navbar = () => {
  return (
    <>
    
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex justify-center items-center'>
          <img  src="https://upload.wikimedia.org/wikipedia/en/2/23/Rem_animepromo.png" alt="" className='w-[50px] h-[30px]'/>
      <p>Manga shop</p>
      </div>
        <div>
          
          <NavLink to="/" className="mx-4 text-white">Home</NavLink>
          
          <NavLink to="/about" className="mx-4 text-white">about me</NavLink>
          
          <NavLink to="/contact" className="mx-4 text-white">Contact</NavLink>
          
        </div>
        
      </div>
      <hr />
      <div className='text-center'> 
          <NavLink to="/news" className="mx-4 text-white">New</NavLink>
          
          <NavLink to="/lightnovel" className="mx-4 text-white">Light novel</NavLink>
          
          <NavLink to="/manga" className="mx-4 text-white">manga</NavLink>
          



      </div>
      
    </nav>
    </>
  );
};

export default Navbar;
