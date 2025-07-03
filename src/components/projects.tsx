"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Food Pantry Analysis System",
    image: "/images/projects/foodpantry.webp",
    description: "A data visualization system that provides analysis on donation and consumer data for forecasting seasonal trends.",
    tech: "Python, Flask, Scikit-Learn, XGBoost, HTML, CSS",
    github: "https://github.com/manisha525/FoodPantryAnalysisSystem",
  },
  {
    title: "Twitter Sentiment Analysis",
    image: "/images/projects/twittersentiment.webp",
    description: "A data analysis project on Tweets and their sentiments using NLP.",
    tech: "Python, Jupyter Notebook, NLTK",
    github: "https://github.com/manisha525/Sentiment-Analysis",
  },
  {
    title: "Online Placement System",
    image: "/images/projects/onlineplacement.webp",
    description: "A platform for online job and placement management.",
    tech: "PHP, MySQL, HTML, CSS",
    github: "https://github.com/manisha525/Online-Placement-System",
  },
  {
    title: "Web Platform for ML Models",
    image: "/images/projects/webplatform.webp",
    description: "A unified web platform for deploying and interacting with ML models like heart disease prediction.",
    tech: "Python, Flask, HTML, CSS",
    github: "https://github.com/manisha525/Web-Platform-For-ML-Models",
  },
  {
    title: "Automatic Street Lighting System",
    image: "/images/projects/automaticstreet.webp",
    description: "A hardware-software system using Arduino for auto-lighting on detecting motion.",
    tech: "Arduino IDE, IR Sensor, LEDs",
    github: "",
  },
  {
    title: "Simple Calculator",
    image: "/images/projects/simplecalculator.webp",
    description: "A minimalist calculator application that can perform the four fundamental operations.",
    tech: "JavaScript, HTML, CSS",
    github: "https://github.com/manisha525/simple-calculator",
    demo: "https://manisha525.github.io/simple-calculator/",
  },
  {
    title: "Tip Calculator",
    image: "/images/projects/tipcalculator.webp",
    description: "An application to calculate tips based on the bill amount and desired tip percentage.",
    tech: "JavaScript, HTML, CSS",
    github: "https://github.com/manisha525/Tip-Calculator",
    demo: "https://manisha525.github.io/Tip-Calculator/",
  },
  {
    title: "Simple Todo App",
    image: "/images/projects/todoapp.webp",
    description: "A minimalist to-do application to keep track of tasks.",
    tech: "JavaScript, HTML, CSS",
    github: "https://github.com/manisha525/simple-todo-app",
  },
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section
      id="projects" aria-label="Projects Section" role="region"
      className="min-h-screen px-4 pt-24 pb-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <motion.h2
        className="text-4xl font-extrabold text-blue-600 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {visibleProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            aria-label={`Project: ${project.title}`}
          >
            <Image
              src={project.image}
              alt={`Preview of project: ${project.title}`}
              width={600}
              height={400}
              className="w-full h-56 object-cover"
              unoptimized={project.image.includes("foodpantry.webp")} // Only unoptimize animated one
              loading="lazy"
            />
            <div className="p-5">
              <div className="flex items-center justify-between">
                {project.github ? (
                  <div className="flex items-center gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-2xl font-semibold text-blue-600 hover:underline flex items-center gap-2"
                    >
                      {project.title} <FaGithub />
                    </Link>

                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        className="text-xl font-extrabold text-blue-600 hover:underline"
                      >
                         Demo
                      </Link>
                    )}
                  </div>
                ) : (
                  <h3 className="text-2xl font-semibold text-blue-600">{project.title}</h3>
                )}
              </div>
              <p className="text-gray-800 dark:text-gray-200 mt-2 text-lg">{project.description}</p>
              <p className="text-lg text-gray-800 dark:text-gray-200 mt-2 italic">Tech Used: {project.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* View More Toggle Button */}
      {projects.length > 6 && (
        <div className="max-w-6xl mx-auto flex justify-end mt-8">
          <button
            aria-label={showAll ? "Collapse project list" : "Expand full project list"}
            onClick={() => setShowAll(!showAll)}
            className=" text-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium shadow-md hover:scale-105 transition-transform"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      )}
    </section>
  );
}
