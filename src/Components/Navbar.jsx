import React, { useState, useEffect } from "react";
import logo from "../assets/baselLogo1.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-10 flex items-center justify-between  fixed top-0 left-0 right-0 z-50 transition duration-200 ${
        isScrolled ? "bg-neutral-900" : "bg-transparent"
      }`}
    >
      <div className="flex flex-shrink-0 items-center cursor-pointer">
        <Link to="home" smooth={true} duration={700} offset={-140}>
          <img className="mx-2 w-15" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="lg:flex gap-4 hidden onscroll">
        <Link
          to="home"
          smooth={true}
          duration={700}
          offset={-140}
          className=" cursor-pointer hover:text-blue-700 transition duration-300"
        >
          HOME
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={700}
          offset={-100}
          className="cursor-pointer hover:text-blue-700 transition duration-300"
        >
          ABOUT
        </Link>
        <Link
          to="technologies"
          smooth={true}
          duration={700}
          offset={-100}
          className="cursor-pointer hover:text-blue-700 transition duration-300"
        >
          TECHNOLOGIES
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={700}
          offset={-100}
          className="cursor-pointer hover:text-blue-700 transition duration-300"
        >
          EXPERIENCES
        </Link>
        <Link
          to="Projects"
          smooth={true}
          duration={700}
          offset={-100}
          className="cursor-pointer hover:text-blue-700 transition duration-300"
        >
          PROJECTS
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={700}
          className="cursor-pointer hover:text-blue-700 transition duration-300"
        >
          CONTACT
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/basel-mohamed-94972a334"
          target="_blank"
          className="hover:text-blue-700 transition duration-300"
        >
          <FaLinkedin />
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/Basel-Mohamed"
          target="_blank"
          className="hover:text-gray-700 transition duration-300"
        >
          <FaGithub />
        </a>
        {/* X */}
        <a
          href="https://x.com/BaselMohamed937"
          target="_blank"
          className="hover:text-blue-500 transition duration-300"
        >
          <FaXTwitter />
        </a>
        {/* WhatsApp */}
        <a
          href="https://wa.me/01007337686"
          target="_blank"
          className="hover:text-green-500 transition duration-300"
        >
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
}
