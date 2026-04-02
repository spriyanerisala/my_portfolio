/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import SkillsAdmin from "./components/SkillsAdmin";
import ProjectsAdmin from "./components/ProjectsAdmin";
// import CertificationsAdmin from './components/CertificationsAdmin';
import ContactsAdmin from "./components/ContactsAdmin";
import AchievementsAdmin from "./components/AchievementsAdmin";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("Skills");

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const renderPage = () => {
    switch (activePage) {
      case "Skills":
        return <SkillsAdmin />;
      case "Projects":
        return <ProjectsAdmin />;
      case "Achievements":
        return <AchievementsAdmin />;
      case "Contacts":
        return <ContactsAdmin />;
      default:
        return <SkillsAdmin />;
    }
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={darkMode} setActivePage={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;