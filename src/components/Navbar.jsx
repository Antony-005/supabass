function Navbar() {
  return (
    <header className="bg-[#0B1F3A] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Supabass
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Services</a>
          <a href="#" className="hover:text-gray-300 transition">Projects</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
        </nav>

        {/* CTA */}
        <button className="hidden md:block bg-white text-[#0B1F3A] px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </header>
  )
}

export default Navbar