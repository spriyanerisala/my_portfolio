/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-900 dark:bg-gray-950 text-white py-6 mt-10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        
        {/* Copyright */}
        <p className="text-sm md:text-base text-gray-200 dark:text-gray-400">
          &copy; {new Date().getFullYear()} S Priya N. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex justify-center mt-4 space-x-6 text-sm md:text-base">
          
          <a
            href="https://github.com/spriyanerisala"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 dark:hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/siva-priya-nerisala-304aa92ab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 dark:hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/WrAEWBsWV8/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 dark:hover:text-blue-400 transition"
          >
            LeetCode
          </a>

        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;