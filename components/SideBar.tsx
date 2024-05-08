"use client"
import Image from "next/image";
import React, { useState } from 'react';
import {  Telescope, Search, History } from 'lucide-react';

export default function SideBar() {
  const navLinks = [
    { name: 'Find Product', icon: <Telescope />},
    { name: 'Search', icon: <Search /> },
    { name: 'History', icon: <History /> },
  ];
  const [activeLink, setActiveLink] = useState('Find Product');
  return (

      <div className="p-6 space-y-4 b bg-gray-200 bg-opacity-55 w-64 ">

          <img src="/Hackathonlogo.png" alt="logo"/>

        <nav className="flex flex-col">
        {navLinks.map(({name, icon}) => (
            <a
              href="#"
              key={name}
              onClick={() => setActiveLink(name)}
              className={`flex items-center my-4 py-2.5 px-4 rounded transition duration-200 ${activeLink === name ? 'bg-teal-600 text-white' : 'hover:bg-teal-600 hover:text-white'}`}
            >
              <span className="mr-2">{icon}</span>
              {name}
            </a>
          ))}
        </nav>
  

    </div>
    
  );
}
