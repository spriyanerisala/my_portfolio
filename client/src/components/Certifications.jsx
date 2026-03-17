/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  const [certs, setCerts] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/certs/get-certs`);
        setCerts(data.certifications || []);
      } catch (error) {
        console.log(error);
        setCerts([]);
      }
    };
    fetchCerts();
  }, []);

  return (
    <div className="px-10 py-20 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 mb-10 text-center">
        Certifications
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {certs?.map((cert) => (
          <motion.div
            key={cert._id}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-6 rounded-lg shadow-md"
          >
            <img
              src={cert.image}
              alt={cert.name}
              onClick={() => setSelectedImage(cert.image)}
              className="w-full h-48 object-cover rounded cursor-pointer"
            />

            <h3 className="mt-4 text-xl font-bold text-blue-800">
              {cert.name}
            </h3>

            <p className="mt-2 text-blue-700">
              {cert.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Animated Popup */}
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
                className="absolute cursor-pointer top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
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

export default Certifications;