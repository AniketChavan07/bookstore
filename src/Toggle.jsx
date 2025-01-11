import React, { useState } from 'react';
import './App.css'; // Add your dark mode styles here

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode} className="toggle-btn">
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
    </div>
  );
}

export default DarkModeToggle;
