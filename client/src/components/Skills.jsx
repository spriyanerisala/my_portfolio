/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Skills = () => {
  const [skills, setSkills] = useState([]);
   const API_URL= import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/skills/get-skills`);
        setSkills(data.skill || []); 
      } catch (error) {
        console.log(error);
        setSkills([]); 
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="px-10 py-20 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills?.map((skill) => (
          <motion.div
            key={skill._id}
            whileHover={{ scale: 1.1 }}
            className="bg-blue-50 p-6 rounded-lg flex flex-col items-center shadow-md"
          >
            <img src={skill.image} alt={skill.name} className="w-80 cursor-pointer h-40 object-contain" />
            <p className="mt-4 text-blue-800 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;