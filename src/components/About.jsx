function About() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="/assets/images/about-placeholder.jpg"
            alt="About Supabass"
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Supabass</h2>
          <p className="text-gray-600 mb-6">
            At Supabass, we are a passionate team of designers and developers
            dedicated to creating digital experiences that matter. From modern
            websites and full systems to logos and branding, we deliver
            solutions that help brands grow and stand out.
          </p>
          <p className="text-gray-600 mb-6">
            We combine creativity, technology, and strategy to build tools and
            visuals that leave a lasting impression. Every project is crafted
            with care, attention to detail, and a focus on quality.
          </p>
          <button className="bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default About