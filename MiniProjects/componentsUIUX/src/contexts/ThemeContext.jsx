import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const themesInfo = [
  { name: "light", color: "linear-gradient(135deg, #eff8ff 0%, #2563eb 100%)" },
  { name: "dark", color: "linear-gradient(135deg, #242424 0%, #8b5cf6 100%)" },
  { name: "ocean", color: "linear-gradient(135deg, #0f172a 0%, #38bdf8 100%)" },
  {
    name: "sakura",
    color: "linear-gradient(135deg, #fff1f2 0%, #ff4d6d 100%)",
  },
  {
    name: "forest",
    color: "linear-gradient(135deg, #0f1f17 0%, #52b788 100%)",
  },
  { name: "coffe", color: "linear-gradient(135deg, #2b1d17 0%, #d97706 100%)" },
  {
    name: "neon",
    color: "linear-gradient(135deg, #0f1126 0%, #8b5cf6 50%, #38bdf8 100%)",
  },
  {
    name: "crimson",
    color: "linear-gradient(135deg, #140c10 0%, #d7263d 100%)",
  },
  {
    name: "sunset",
    color: "linear-gradient(135deg, #1a1026 0%, #ff7b54 100%)",
  },
];

const themes = [
  "light",
  "dark",
  "ocean",
  "sakura",
  "forest",
  "coffe",
  "neon",
  "crimson",
  "sunset",
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
        themesInfo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
