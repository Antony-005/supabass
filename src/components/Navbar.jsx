import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#0B1F3A] text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          <Link to="/">Supabass</Link>
        </h1>

        {/* Desktop Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/services" className="hover:text-gray-300 transition">Services</Link>
          <Link to="/projects" className="hover:text-gray-300 transition">Projects</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Navbar;