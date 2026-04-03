/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const fetchAchievements = async () => {
    try {
      const { data } = await axios.get(
        `${API_URL}/api/achievements/get-achievements`
      );
      setAchievements(data.achievements || []);
    } catch (error) {
      console.log(error);
      setAchievements([]);
    }
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  return (
    <div className="px-10 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-10 text-center">
        Achievements
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements?.map((ach) => (
          <motion.div
            key={ach._id}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center"
          >
            {/* Image */}
            {ach.image && (
              <img
                src={ach.image}
                alt={ach.name}
                onClick={() => setSelectedImage(ach.image)}
                className="w-72 h-52 object-cover rounded mb-4 cursor-pointer hover:opacity-90 transition"
              />
            )}

            {/* Title */}
            <h3 className="text-xl font-bold text-blue-800 dark:text-white">
              {ach.name}
            </h3>

            {/* Description */}
            <p className="mt-2 text-blue-700 dark:text-gray-300 text-center">
              {ach.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.7, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Full View"
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 cursor-pointer bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Achievements;