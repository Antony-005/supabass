function Projects() {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "A fully functional online store with secure checkout and inventory management.",
      image: "/assets/images/project1.jpg",
      category: "Web Development",
    },
    {
      title: "Corporate Portal",
      description: "A secure web portal for employees to manage tasks and internal resources.",
      image: "/assets/images/project2.jpg",
      category: "Web Portals",
    },
    {
      title: "Branding Campaign",
      description: "Logo, banners, and graphics for a complete rebranding effort.",
      image: "/assets/images/project3.jpg",
      category: "Graphics & Branding",
    },
    {
      title: "Marketing Landing Page",
      description: "High-converting landing page designed for lead generation and product launches.",
      image: "/assets/images/project4.jpg",
      category: "Websites",
    },
    {
      title: "Admin Dashboard",
      description: "Custom dashboard with analytics and reporting for internal operations.",
      image: "/assets/images/project5.jpg",
      category: "Full Systems",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
        <p className="text-gray-600 text-lg">
          Here’s a selection of projects we’ve completed for our clients.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <span className="text-sm font-medium text-navy">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;