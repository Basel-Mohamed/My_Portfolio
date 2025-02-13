import React from "react";
import logo from "../assets/baselLogo1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="#">
          <img className="mx-2 w-15" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/basel-mohamed-94972a334" target="_blank" className="hover:text-blue-700 transition duration-300">
          <FaLinkedin />
        </a>
        {/* GitHub */}
        <a href="https://github.com/Basel-Mohamed" target="_blank" className="hover:text-gray-700 transition duration-300">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}
