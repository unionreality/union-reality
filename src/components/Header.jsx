import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "/urc.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/project" },
    { name: "CONSTRUCTIONS", path: "/constructions" },
    { name: "PORTFOLIO", path: "/portfolio" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 z-50 w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-4 lg:py-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Union Reality & Construction"
              className="h-12 sm:h-18 md:h-20 lg:h-25 xl:h-24 w-auto object-contain"
            />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-12">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative text-white text-[15px] font-medium tracking-wider hover:text-[#d4a437] transition-all duration-300 after:absolute after:left-0 after:bottom-[-8px] after:w-0 after:h-[2px] after:bg-[#d4a437] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Desktop Call Button */}
            <a
              href="tel:+919901079241"
              className="hidden md:flex items-center gap-3 border border-[#d4a437] text-white px-5 xl:px-7 py-3 rounded-full hover:bg-[#d4a437] hover:text-black transition-all duration-300"
            >
              <FaPhoneAlt />
              <span className="font-medium text-sm">
                REQUEST A CALL
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="xl:hidden text-white text-3xl"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] xl:hidden transition-all duration-500 ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-[340px]
          bg-[#0f0f0f] border-l border-[#d4a437]/20
          transition-transform duration-500 ease-in-out
          ${
            menuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Top */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto"
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="text-white text-3xl"
            >
              <HiX />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col px-6 py-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b border-white/10 text-white tracking-widest text-sm hover:text-[#d4a437] transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Call Button */}
            <a
              href="tel:+919876543210"
              className="mt-8 flex items-center justify-center gap-2 bg-[#d4a437] text-black py-4 rounded-full font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              <FaPhoneAlt />
              REQUEST A CALL
            </a>

            {/* Contact Info */}
            <div className="mt-10 text-center text-white/60 text-sm">
              Union Reality & Construction
              <br />
              Premium Real Estate Solutions
            </div>
          </div>
        </div>
      </div>
    </>
  );
}