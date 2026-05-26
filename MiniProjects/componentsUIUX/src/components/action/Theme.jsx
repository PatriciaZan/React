import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import ThemeButton from "./ThemeButton";

export default function Theme() {
  const [isOpen, setIsOpen] = useState(false);

  const { changeTheme, theme } = useTheme();

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Open Themes</button>

      {isOpen && (
        <div>
          <span>Select theme</span>

          <div>
            <button onClick={() => changeTheme("light")}>Light</button>

            <button onClick={() => changeTheme("dark")}>Dark</button>

            <div>
              <ThemeButton color={"#1a1a2e"} theme={"theme-1"} />
              <ThemeButton color={"#0f172a"} theme={"theme-2"} />
              <ThemeButton color={"#1e293b"} theme={"theme-3"} />
              <ThemeButton color={"#172554"} theme={"theme-4"} />
              <ThemeButton color={"#3f0d12"} theme={"theme-5"} />
              {/* <button onClick={() => changeTheme("theme-1")}>
                <span>🔴</span> Color #1
              </button> */}

              {/* <button onClick={() => changeTheme("theme-2")}>
                <span>🟢</span> Color #2
              </button>

              <button onClick={() => changeTheme("theme-3")}>
                <span>🟠</span> Color #3
              </button>

              <button onClick={() => changeTheme("theme-4")}>
                <span>🔵</span> Color #4
              </button>

              <button onClick={() => changeTheme("theme-5")}>
                <span>🌸</span> Color #5
              </button> */}
            </div>
          </div>

          <p>Current: {theme}</p>
        </div>
      )}
    </>
  );
}
