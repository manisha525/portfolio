"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";



export default function About() {

  const handleResumeDownload = async () => {
    
    window.open("/files/Resume_Manisha.pdf", "_blank");

    const sessionId = localStorage.getItem("sessionId");
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    fetch(`${backendURL}/log-session-event/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "clicked_resume",
        details: "from about section",
        session_id: sessionId,
      }),
    });
    
  };

  useEffect(() => {
    const sessionId = localStorage.getItem("sessionId");
    const backendURL = process.env.NEXT_PUBLIC_BACKEND_URL;

    fetch(`${backendURL}/log-page-visit/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: "about", session_id: sessionId }),
    });
  }, []);


  
  
  return (
    <section id="about" className="min-h-screen px-4 pt-28 pb-10 flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-600 mb-12">
        About Me
      </h2>
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
      
        {/* Left: Text Content */}
        <div className="flex-1 text-left">

          <p className="mt-4 text-xl leading-relaxed text-gray-800 dark:text-gray-200">
            Hi, I am Manisha Shah, a passionate full-stack developer with strong foundation in <strong> AI</strong>.
              Currently pursuing my <strong>Master of Science in Computer Science</strong> at Pace University.
            I thrive at the intersection of creativity and logic, designing clean UIs backed by powerful technology stacks like <strong>Python, FastAPI, NextJs and Large Language Models</strong>. I enjoy building smart, elegant digital experiences that solve real-world problems.
            <br />
            When I am not coding, you will probably find me capturing moments with <strong>Photography</strong>, <strong>Traveling</strong> - exploring new places, attending <strong>Events</strong> or just vibing with <strong>Music</strong>.
            <br /><strong>My long-term goal?</strong> To keep building meaningful AI-powered products that make life a little easier — and a lot smarter.
            </p>


          <motion.button
            onClick={handleResumeDownload}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="text-lg mt-8 inline-block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-blue-500/20"
          >
            Download Resume
          </motion.button>

        </div>

      <motion.div
        className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute inset-0 rounded-full border-4 border-green-400 animate-floatRing z-0 scale-[1.12]" />
        <Image
          src="/manisha.webp"
          alt="Manisha Shah"
          width={160}
          height={173}
          priority
          className="rounded-full object-cover w-full h-full relative z-10 shadow-md"
        />
      </motion.div>
      </motion.div>
    </section>
  );
}
