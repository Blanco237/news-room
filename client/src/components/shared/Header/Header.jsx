import React from "react";
import { FaRegEnvelope } from 'react-icons/fa'
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.png";

import IconList from "../IconList";


const Header = () => {
  return (
    <header className="w-full shadow">
      <nav className="w-full flex justify-between items-center md:px-16 px-4 py-4">
        <IconList />
        <div className="md:w-1/12 w-2/12">
          <Link to="/" ><img src={logo} alt="News Hubs" className="w-11/12"/></Link>
        </div>
        <div>
        <button className="flex gap-1 items-center bg-primary px-4 py-2 uppercase font-medium text-white text-sm hover:bg-black transition-all duration-500">
            <span className="text-lg"><FaRegEnvelope /></span>
            <span>Subcribe</span> 
        </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
