"use client";

import { motion } from "framer-motion";
import { FaTools, FaBrain, FaCode, FaServer } from "react-icons/fa";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen px-4 pt-24 pb-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend */}
        <SkillCard
          icon={<FaCode size={24} className="text-teal-600" />}
          title="Frontend Development"
          skills={[
            "React", "Next.js", "JavaScript", "TypeScript",
            "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
            "Framer Motion", "Shadcn/UI", "Responsive Web Design",
          ]}
        />

        {/* Backend */}
        <SkillCard
          icon={<FaServer size={24} className="text-purple-600" />}
          title="Backend Development"
          skills={[
            "Python", "Flask", "Django", "FastAPI",
            "Node.js", "PHP",
            "Java", "C", "C++",
            "SQL", "PostgreSQL", "MySQL", "MongoDB",
            "REST APIs",

          ]}
        />

        {/* AI */}
        <SkillCard
          icon={<FaBrain size={24} className="text-pink-500" />}
          title="AI & Machine Learning"
          skills={[
            "Pandas", "NumPy", "Scikit-learn", "Matplotlib",
            "Natural Language Processing", "NLTK",
            "Data Analysis", "Prophet", "XGBoost",
            "Time Series Forecasting", "LLMs (Ollama, OpenAI, Gemini, DALL-E)", "RAG", "Langchain",
            "Jupyter Notebooks", "Vector DB (FAISS)",
          ]}
        />

        {/* Tools */}
        <SkillCard
          icon={<FaTools size={24} className="text-red-500" />}
          title="Tools & Workflow"
          skills={[
            "Git & GitHub", "VS Code", "Postman",
            "Firebase", "Vercel", "Render",
            "pgAdmin", "Docker", "TortoiseSVN",
            "Agile Methodology", "Team Collaboration",
            "Linux, Terminal Basics", "AWS", "Amazon EC2"
          ]}
        />
      </div>
    </section>
  );
}

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

function SkillCard({ title, icon, skills }: SkillCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 bg-opacity-80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="text-2xl font-semibold text-blue-600">{title}</h3>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2 mt-2 text-sm">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="text-lg bg-gray-100 rounded-3xl px-4 py-1 text-gray-800 text-center hover:bg-blue-100 transition"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
