import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const getInitialDarkMode = () => {
    const preferDarkMode = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;
    const storedDarkMode = localStorage.getItem("darkTheme") === "true";
    return storedDarkMode || preferDarkMode;
  };
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
  const [value, setValue] = useState("cat");

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);

    document.body.classList.toggle("darkTheme", newDarkTheme);

    localStorage.setItem(newDarkTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
  });

  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        value,
        setValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
