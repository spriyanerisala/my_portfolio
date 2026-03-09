/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Sidebar = ({ setPage }) => {
  const links = ["Dashboard", "Projects", "Certifications", "Skills", "Contacts"];

  return (
    <motion.div
      className="w-64 h-screen bg-blue-900 text-white flex flex-col p-4"
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-8 cursor-pointer" onClick={() => setPage("Dashboard")}>
        Admin Panel
      </h1>
      {links.map((link) => (
        <motion.div
          key={link}
          className="py-2 px-4 cursor-pointer rounded hover:bg-blue-700 mb-2"
          whileHover={{ scale: 1.05 }}
          onClick={() => setPage(link)}
        >
          {link}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Sidebar;