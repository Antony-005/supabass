import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-[#0B1F3A] text-white px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Building Digital Experiences That Move Businesses Forward
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Supabass delivers websites, systems, portals, and creative designs that help brands grow and stand out.
          </p>
          <Link
            to="/projects"
            className="bg-white text-[#0B1F3A] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
          <p className="text-gray-600 text-lg">
            A brief look at the core services that make Supabass stand out.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Websites</h3>
            <p className="text-gray-600">Modern, responsive websites that drive results.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Web Portals</h3>
            <p className="text-gray-600">Custom portals to manage data and users efficiently.</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Graphics & Branding</h3>
            <p className="text-gray-600">Logos, banners, posters, and marketing visuals.</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg">
            A glimpse of some of our recent work.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/assets/images/project1.jpg"
              alt="E-Commerce Website"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">E-Commerce Website</h3>
              <p className="text-gray-600 text-sm">Fully functional online store with secure checkout.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/assets/images/project2.jpg"
              alt="Corporate Portal"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Corporate Portal</h3>
              <p className="text-gray-600 text-sm">Secure portal for employees and internal resources.</p>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
            <img
              src="/assets/images/project3.jpg"
              alt="Branding Campaign"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Branding Campaign</h3>
              <p className="text-gray-600 text-sm">Logo, banners, and graphics for brand refresh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / CTA */}
      <section className="py-20 bg-[#0B1F3A] text-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 mb-8">
            "Supabass transformed our online presence. Professional, creative, and reliable."
          </p>
          <p className="text-gray-300 mb-8">
            – Jane Doe, CEO of Acme Corp
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#0B1F3A] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Work With Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;