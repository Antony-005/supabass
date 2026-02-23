import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center bg-[#0B1F3A] text-white px-6 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Building Digital Experiences That Move Businesses Forward
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Supabass creates modern websites, full systems, web portals and visual
            designs that help brands grow and stand out.
          </p>
          <button className="bg-white text-[#0B1F3A] font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition">
            View Our Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />
    </>
  );
}

export default Home;