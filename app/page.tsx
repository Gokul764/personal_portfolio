import * as framer from "framer-motion";
const motion = framer.motion;

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Hello, I'm [Your Name]</h1>
        <p className="text-lg mt-4">A Passionate Developer</p>
      </motion.div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center space-x-6 mt-6"
      >
        <a href="#projects" className="text-lg hover:text-gray-400">Projects</a>
        <a href="#skills" className="text-lg hover:text-gray-400">Skills</a>
        <a href="#contact" className="text-lg hover:text-gray-400">Contact</a>
      </motion.nav>

      {/* Projects Section */}
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold">Project {project}</h3>
              <p className="mt-2">Brief description of the project.</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript', 'React', 'Next.js', 'Tailwind CSS'].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-4 rounded-xl text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.div
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <form className="flex flex-col items-center">
          <input type="text" placeholder="Your Name" className="p-2 mb-4 bg-gray-800 rounded-md text-white w-80" />
          <input type="email" placeholder="Your Email" className="p-2 mb-4 bg-gray-800 rounded-md text-white w-80" />
          <textarea placeholder="Your Message" className="p-2 mb-4 bg-gray-800 rounded-md text-white w-80 h-32" />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md">Send Message</button>
        </form>
      </motion.div>
    </div>
  );
}

export { Portfolio };