import React, { createContext, useState, useEffect } from "react";
export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => { },
});

function getInitialState() {
  const theme = localStorage.getItem('theme')
  return theme ? JSON.parse(theme) : 'flase'
}

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkTheme));
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
