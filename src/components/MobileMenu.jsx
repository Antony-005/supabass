import { Link } from "react-router-dom";

function MobileMenu({ isOpen, toggleMenu }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-20 left-0 w-full bg-[#0B1F3A] text-white shadow-lg z-50 flex flex-col items-center space-y-4 py-6">
      <Link to="/" onClick={toggleMenu} className="hover:text-gray-300">Home</Link>
      <Link to="/about" onClick={toggleMenu} className="hover:text-gray-300">About</Link>
      <Link to="/services" onClick={toggleMenu} className="hover:text-gray-300">Services</Link>
      <Link to="/projects" onClick={toggleMenu} className="hover:text-gray-300">Projects</Link>
      <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300">Contact</Link>
    </div>
  );
}

export default MobileMenu;