/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-blue-900 text-white py-6 mt-10"
    >
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} S Priya N. All rights reserved.</p>
        <div className="flex justify-center mt-2 space-x-6">
          <a href="https://github.com/spriyanerisala" target="_blank" rel="noreferrer" className="hover:text-blue-300">GitHub</a>
          <a href="https://www.linkedin.com/in/siva-priya-nerisala-304aa92ab" target="_blank" rel="noreferrer" className="hover:text-blue-300">LinkedIn</a>
          <a href="https://leetcode.com/u/WrAEWBsWV8/" target="_blank" rel="noreferrer" className="hover:text-blue-300">LeetCode</a>
         
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;