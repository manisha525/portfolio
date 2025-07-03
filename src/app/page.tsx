"use client";

import { motion } from "framer-motion";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Qualification from "@/components/qualification";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <motion.div
      className="min-h-screen px-4 sm:px-3 xs:px-2 pt-24 pb-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex-1 text-center">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            Hi, I&apos;m Manisha Shah
          </h1>


        <h2 className="text-lg md:text-xl mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Turning ideas into smart, full-stack experiences, powered by Python, JavaScript, and AI.
        </h2>
        <h2 className="text-xl md:text-2xl mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Web Developer with AI Expertise | Specializing in Python, Next.js, PostgreSQL, and LLMs
        </h2>
      </div>

      {/* Render All Sections Inline */}
      <About />
      <Skills />
      <Projects />
      <Qualification />
      <Services />
      <Contact />
    </motion.div>
  );
}
