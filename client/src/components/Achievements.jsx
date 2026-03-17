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
      const { data } = await axios.get(`${API_URL}/api/achievements/get-achievements`);
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
    <div className="px-10 py-20 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements?.map((ach) => (
          <motion.div
            key={ach._id}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            {ach.image && (
              <img
                src={ach.image}
                alt={ach.name}
                onClick={() => setSelectedImage(ach.image)}
                className="w-80 h-60 object-cover rounded mb-4 cursor-pointer"
              />
            )}

            <h3 className="text-xl font-bold text-blue-800">
              {ach.name}
            </h3>

            <p className="mt-2 text-blue-700 text-center">
              {ach.description}
            </p>
          </motion.div>
        ))}
      </div>

   
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
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
                className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 cursor-pointer right-2 bg-red-600 text-white px-3 py-1 rounded"
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