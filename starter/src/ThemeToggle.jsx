import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "./context";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaMoon className="toggle-icon" />
        ) : (
          <FaSun className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
