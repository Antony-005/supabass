function Services() {
  const services = [
    {
      title: "Websites",
      description: "Modern, responsive websites designed to impress and convert visitors.",
      icon: "/assets/images/websites-icon.png"
    },
    {
      title: "Full Systems",
      description: "Complete software solutions for businesses, from planning to deployment.",
      icon: "/assets/images/systems-icon.png"
    },
    {
      title: "Web Portals",
      description: "Custom web portals for managing data, users, and processes efficiently.",
      icon: "/assets/images/portal-icon.png"
    },
    {
      title: "Posters & Graphics",
      description: "Creative visuals, posters, and marketing graphics that grab attention.",
      icon: "/assets/images/graphics-icon.png"
    },
    {
      title: "Logos & Banners",
      description: "Branding assets that communicate your identity clearly and professionally.",
      icon: "/assets/images/logos-icon.png"
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-800 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg">
          Supabass delivers a wide range of digital solutions to help your business grow.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition">
            {service.icon && (
              <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;