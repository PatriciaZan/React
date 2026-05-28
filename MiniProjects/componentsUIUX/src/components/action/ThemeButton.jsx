import React from "react";
import styles from "../../styles/components/action/themeButton.module.scss";

import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeButton({ color, theme }) {
  const { changeTheme } = useTheme();
  console.log(color);

  return (
    <button onClick={() => changeTheme(theme)}>
      <div
        className={styles.colorDiv}
        style={{
          background: color,
        }}
      ></div>
      <span>{theme}</span>
    </button>
  );
}
