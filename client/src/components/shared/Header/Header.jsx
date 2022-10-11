import React from "react";

import { FaTwitter, FaEnvelope, FaGithub, FaRegEnvelope, FaFacebookF } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <header className="w-full shadow">
      <nav className="w-full flex justify-between items-center px-16 py-4">
        <section className="flex items-center gap-2">
          {[<FaFacebookF />, <FaTwitter />, <FaEnvelope />, <FaGithub />].map(
            (item, i) => (
              <span key={i} className="cursor-pointer w-7 h-7 grid place-items-center border border-primary rounded-full text-sm text-blue-400 hover:bg-secondary transition-colors" role={"button"}>{item}</span>
            )
          )}
        </section>
        <div className="w-1/12">
          <img src={logo} alt="News Hubs" className="w-11/12"/>
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
