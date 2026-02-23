function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Supabass</h3>
          <p className="text-gray-300 text-sm mt-1">
            Building Digital Experiences That Move Businesses Forward
          </p>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Services</a>
          <a href="#" className="hover:text-gray-300 transition">Projects</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} Supabass. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer