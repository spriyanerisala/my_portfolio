/* eslint-disable no-unused-vars */

import React from "react";
import { motion } from "framer-motion";

const Navbar = ({ toggleDarkMode, isDarkMode, setActivePage }) => {
  const links = ["Skills", "Projects","Achievements", "Contacts"];

  return (
    <nav className={`flex justify-between items-center px-8 py-4 shadow-md ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => setActivePage("Skills")}>
        Admin Panel
      </h1>

      <ul className="flex gap-6">
        {links.map((link) => (
          <motion.li
            key={link}
            whileHover={{ scale: 1.1, color: "#2563EB" }}
            className="cursor-pointer"
            onClick={() => setActivePage(link)}
          >
            {link}
          </motion.li>
        ))}
      </ul>

      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 rounded ${isDarkMode ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-900"}`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;