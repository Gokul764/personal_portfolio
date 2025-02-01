"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-800 text-white flex flex-col items-center px-8">
      {/* Header & Hero Section */}
      <header className="w-full max-w-6xl py-6 flex justify-between items-center border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wider">Gokul</h1>
        <nav className="space-x-6">
          {["Work", "About", "Blog", "Contact"].map((item, index) => (
            <a key={index} href={`#${item.toLowerCase()}`} className="text-lg hover:text-green-400 transition">{item}</a>
          ))}
        </nav>
      </header>
      
      <main className="w-full max-w-6xl py-20 text-center">
        <h2 className="text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-500 to-green-700 animate-pulse">
          AI Enthusiast
        </h2>
        <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
          I'm an AI enthusiast with a passion for innovation, research, and leveraging artificial intelligence to solve real-world problems.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-6 bg-green-500 px-6 py-3 rounded-md text-gray-900 font-bold transition shadow-lg shadow-green-500/50 hover:shadow-green-700/50"
        >
          GET IN TOUCH →
        </motion.button>
      </main>
      
      {/* Image & Grid Section */}
      <section className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Image src="/images/cartoon-boy.webp" alt="Cartoon Boy" width={250} height={250} className="mx-auto rounded-full shadow-lg" />
          <div className="absolute inset-0 bg-green-500 opacity-10 mix-blend-multiply rounded-lg" />
        </motion.div>
        <div className="grid grid-cols-2 gap-6">
          {["Machine Learning", "Artificial Intelligence", "Python", "Javascript","Node.js","Tensorflow"].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-green-600 text-black font-bold px-4 py-6 rounded-lg shadow-lg text-center hover:bg-green-700 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="w-full max-w-6xl mt-16 text-center">
        <h2 className="text-4xl font-bold text-green-300">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {["Driver Drowsiness Detection", "License Plate Recognition", "Weeds Detection", "Sentiment Analysis"].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-500 transition"
            >
              <h3 className="text-xl font-semibold text-green-400">{project}</h3>
              <p className="mt-2 text-gray-300">Brief description of the project.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
