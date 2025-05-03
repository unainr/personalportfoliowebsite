"use client";

import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaBrain, FaProjectDiagram } from 'react-icons/fa';


export function AboutSection() {
  return (
    <section id="about" className="py-16 relative">
      <div className="absolute inset-0  backdrop-blur-lg" />
      <div className="max-w-5xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="dark:text-white">About</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#CBACF9] to-[#B794F4] animate-gradient">
              Me
            </span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg md:text-xl max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with expertise in modern web technologies.
            With a strong foundation in both front-end and back-end development, I create
            seamless, user-centric applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            //{ icon: FaCode, title: "Experience", value: "2+ Years", delay: 0.4 },
            { icon: FaProjectDiagram, title: "Projects", value: "30+ Completed", delay: 0.6 },
            { icon: FaBrain, title: "Focus", value: "AI & ML", delay: 1.0 },
            { icon: FaLightbulb, title: "Interests", value: "AI & Web3", delay: 1 }

          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.5, delay: item.delay }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-gray-800 
                hover:border-[#CBACF9]/50 transition-all duration-300 
                hover:shadow-lg hover:shadow-[#CBACF9]/20 group"
            >
              <item.icon className="text-[#CBACF9] text-4xl mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-[#CBACF9] font-semibold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute -z-10 inset-0 bg-gradient-to-r from-[#CBACF9]/10 to-[#B794F4]/10 blur-3xl"
        />
      </div>
    </section>
  );
}
