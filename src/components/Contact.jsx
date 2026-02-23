function Contact() {
  return (
    <section className="py-20 bg-[#0B1F3A] text-white px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-300 text-lg">
          Have a project in mind? Reach out and let's build something amazing together.
        </p>
      </div>

      <form className="max-w-4xl mx-auto bg-white text-gray-800 rounded-xl shadow-lg p-8 grid gap-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
        />
        <textarea
          placeholder="Your Message"
          rows="6"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]"
        ></textarea>

        <button
          type="submit"
          className="bg-[#0B1F3A] text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;