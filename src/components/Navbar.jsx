import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b-4 border-[rgb(246,247,248)]">
      <div className="w-full flex items-center justify-between px-3 sm:px-6 md:px-10 py-3 relative">
        
     
        <div className="flex items-center gap-2">
          <img src={Logo} alt="E-Comm Logo" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">E-Comm</span>
        </div>

        <ul className="hidden md:flex gap-6 lg:gap-12 font-normal text-base lg:text-lg ml-20">
          <li><a href="#" className="text-black hover:text-blue-500">HOME</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">BAG</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">SNEAKERS</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">BELT</a></li>
          <li><a href="#" className="text-black hover:text-blue-500">CONTACT</a></li>
        </ul>

       
        <div className="hidden md:flex items-center gap-4 text-gray-700">
          <FiShoppingCart className="text-lg cursor-pointer" />
          <span className="text-sm sm:text-base">Items</span>
          <span className="text-sm sm:text-base">$0.00</span>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-gray-700">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 z-50">
          <a href="#" className="text-black hover:text-blue-500">HOME</a>
          <a href="#" className="text-black hover:text-blue-500">BAG</a>
          <a href="#" className="text-black hover:text-blue-500">SNEAKERS</a>
          <a href="#" className="text-black hover:text-blue-500">BELT</a>
          <a href="#" className="text-black hover:text-blue-500">CONTACT</a>
          <div className="flex items-center gap-3 text-gray-700 pt-2">
            <FiShoppingCart className="text-lg cursor-pointer" />
            <span className="text-sm">Items</span>
            <span className="text-sm">$0.00</span>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
