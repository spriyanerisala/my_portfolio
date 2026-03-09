/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
   const API_URL= import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/projects/get-projects`);
        setProjects(data.projects);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="px-10 py-20 bg-blue-50">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <motion.div
            key={proj._id}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <img src={proj.image} alt={proj.name} className="w-full h-48 object-cover rounded" />
            <h3 className="mt-4 text-xl font-bold text-blue-800">{proj.name}</h3>
            <p className="mt-2 text-blue-700">{proj.stackUsed.join(", ")}</p>
            <div className="flex mt-4 gap-4">
              <a href={proj.githubLink} className="text-blue-500 underline">GitHub</a>
              <a href={proj.liveDemo} className="text-blue-500 underline">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;