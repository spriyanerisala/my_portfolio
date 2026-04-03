/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/projects/get-projects`);
        setProjects(data.projects || []);
      } catch (error) {
        console.log(error);
        setProjects([]);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="px-10 py-20 bg-blue-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-10 text-center">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj._id}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={proj.image}
              alt={proj.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Title */}
            <h3 className="mt-4 text-xl font-bold text-blue-800 dark:text-white">
              {proj.name}
            </h3>

            {/* Tech Stack */}
            <p className="mt-2 text-blue-700 dark:text-gray-300">
              {proj.stackUsed?.join(", ")}
            </p>

            {/* Links */}
            <div className="flex mt-4 gap-4">
              <a
                href={proj.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                GitHub
              </a>

              <a
                href={proj.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 dark:text-blue-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;