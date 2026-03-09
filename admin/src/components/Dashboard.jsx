/* eslint-disable no-unused-vars */
// Dashboard.jsx
import React from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-4">Welcome to Admin Dashboard</h2>
      <p className="text-blue-800">
        Use the sidebar to manage Projects, Certifications, Skills, and Contact messages.
      </p>
    </motion.div>
  );
};

export default Dashboard;