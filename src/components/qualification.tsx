"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const qualifications = [
  {
    type: "education",
    title: "Master of Science in Computer Science",
    institution: "Pace University, New York",
    time: "Expected Dec 2025",
    description:
      "Specialization in Artificial Intelligence. Gained expertise in AI/ML, NLP, Data Science and parallel computing through advanced coursework and hands-on projects using Python, Nextjs, and FastAPI.",
  },
  {
    type: "experience",
    title: "Junior React Developer",
    institution: "Pratyaza Infosys",
    time: "Jan 2022 - June 2023",
    description:
      "Built performant business web apps with reusable components and responsive layouts. Optimized frontend performance and participated in daily Agile stand-ups, sprints, and code reviews.",
  },
  
  {
    type: "experience",
    title: "Intern React Developer",
    institution: "Pratyaza Infosys",
    time: "Oct 2021 - Jan 2022",
    
    description:
      "Facilitated 3 Agile team workshops and engaged in over 100+ hours of hands-on learning with React stack, focusing on component design and development best practices.",
  },

  {
    type: "education",
    title: "Bachelor of Engineering in Information Technology",
    institution: "NCIT, Nepal",
    time: "Completed June 2021",
    description:
      "Specialized in Web Technology. Learned core concepts of Data Structures and Algorithms, OOP, Networking, Databases, Introduction to AI and built several academic projects including web platforms and automation tools.",
  },
];

export default function Qualification() {
  return (
    <section id="qualification" className="min-h-screen px-4 pt-24 pb-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-16">
        Qualification
      </h2>

      <div className="relative max-w-5xl mx-auto">
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 rounded"></div>

        {qualifications.map((item, index) => {
          /* const isLeft = item.type === "education"; */
          const isLeft = index % 2 === 0;
          const Icon = item.type === "education" ? FaGraduationCap : FaBriefcase;

          return (
            <motion.div
              key={index}
              className={`mb-16 flex flex-col md:flex-row items-center justify-between ${
                isLeft ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Time Label */}
              <div className={`w-full md:w-1/2 px-4 mb-4 md:mb-0 ${isLeft ? 'text-center md:text-start' : 'text-center md:text-end'}`}>
                <p className="text-lg text-gray-500">{item.time}</p>
              </div>


              {/* Timeline Dot */}
              <div className="relative w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-md z-10">
                <Icon className="text-xl" />
              </div>

              {/* Card */}
              <div className="w-full md:w-1/2 px-4 mt-6 md:mt-0">
                <motion.div
                  className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-2xl font-semibold text-blue-600 flex items-center gap-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.institution}</p>
                  <p className="mt-2 text-lg text-gray-800 dark:text-gray-200">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

