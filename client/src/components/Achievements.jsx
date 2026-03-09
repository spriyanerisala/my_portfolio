/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  const API_URL= import.meta.env.VITE_BACKEND_URL;
  const fetchAchievements = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/api/achievements/get-achievements`);
      setAchievements(data.achievements || []);
    } catch (error) {
      console.log(error);
      setAchievements([]); // fallback
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <div className="px-10 py-20 bg-white ">
      <h2 className="text-3xl font-bold text-blue-900  mb-10 text-center">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements?.map((ach) => (
          <motion.div
            key={ach._id}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50  p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            {ach.image && (
              <img
                src={ach.image}
                alt={ach.name}
                className="w-80 h-60 object-cover rounded mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-blue-800">{ach.name}</h3>
            <p className="mt-2 text-blue-700  text-center">
              {ach.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;