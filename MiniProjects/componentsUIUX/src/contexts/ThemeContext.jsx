import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themes = [
  "light",
  "dark",
  "theme-1",
  "theme-2",
  "theme-3",
  "theme-4",
  "theme-5",
];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
