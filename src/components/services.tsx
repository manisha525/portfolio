"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaCode, FaPython, FaRobot, FaLaptopCode } from "react-icons/fa";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 pt-28 pb-10 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
        <ServiceCard
          Icon={FaCode}
          title="Frontend Developer"
          description="Crafting highly dynamic, responsive, and accessible web UIs using React, Next.js, and Tailwind CSS. Experienced in building responsive web applications such as Portfolios, E-Commerce UI, and Dashboards, using modern tools like TypeScript, Framer Motion, and Shadcn/UI creating fluid experiences."
        />
        <ServiceCard
          Icon={FaPython}
          title="Backend Developer"
          description="Developing efficient backend systems, automation scripts, and APIs using Python, FastAPI, and Node.js . Experienced with Database related tools like PostgreSQL, MySQL, MongoDB, and REST APIs and building real-world database solutions like file upload, session tracking, database logging and multi-user authentication."
        />
        <ServiceCard
          Icon={FaRobot}
          title="AI/ML Developer"
          description="Creating intelligent real world solutions powered by AI, ML and NLP. Hands-on experience with LLMs like Ollama, OpenAI, Google AI APIs while building AI Agent/Assistant, and AI custom Image Generator with DALL-E including knowledge in RAG, langchain, FAISS and other AI related tools."
        />
        <ServiceCard
          Icon={FaLaptopCode}
          title="Data Scientist"
          description="Using Machine Learning and Data Analytics to build projects such as Sentiment Analysis, Time Series Analysis, Forecasting using libraries like Pandas, Scikit-Learn, Prophet, and Seaborn. Proficient in Data Visualization and Evaluation using tools like Google Colab, and Jupyter Notebook."
        />
      </div>
    </motion.section>
  );
}

function ServiceCard({
  Icon,
  title,
  description,
}: {
  Icon: IconType;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto shadow group-hover:shadow-lg transition">
        <Icon className="text-2xl" />
      </div>
      <h3 className="text-2xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">{description}</p>
    </motion.div>
  );
}
