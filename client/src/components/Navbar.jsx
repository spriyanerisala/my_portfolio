
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

 const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme === "dark" : false; 
});

  useEffect(() => {
  const root = document.documentElement;

  if (darkMode) {
    root.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    root.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}, [darkMode]);

  const links = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Achievements", id: "achievements" },
    { name: "Contact Me", id: "contact" },
  ];

  const handleScroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
  
        <h1
          className="text-2xl font-bold text-blue-900 dark:text-white cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Siva Priya N
        </h1>

    
        <ul className="hidden md:flex space-x-8 text-blue-800 dark:text-gray-300 font-semibold">
          {links.map((link, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => handleScroll(link.id)}
            >
              {link.name}
            </motion.li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          
          {/* ✅ Dark Mode Toggle */}
          {/* <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="px-3 py-1 rounded-lg bg-blue-500 dark:bg-gray-700 text-white transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-800 dark:text-white focus:outline-none"
            >
              {isOpen ? (
                <span className="text-3xl">&times;</span>
              ) : (
                <span className="text-3xl">&#9776;</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center bg-blue-50 dark:bg-gray-800 text-blue-900 dark:text-white font-semibold space-y-4 py-4 md:hidden"
        >
          {links.map((link, idx) => (
            <li
              key={idx}
              className="cursor-pointer"
              onClick={() => {
                handleScroll(link.id);
                setIsOpen(false);
              }}
            >
              {link.name}
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;