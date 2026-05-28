import styles from "../../styles/components/action/theme.module.scss";
import { useState } from "react";
import ThemeButton from "./ThemeButton";

import { useTheme } from "../../contexts/ThemeContext";

export default function Theme() {
  const [isOpen, setIsOpen] = useState(false);

  const { themesInfo } = useTheme();

  return (
    <div className={styles.theme}>
      <button onClick={() => setIsOpen(!isOpen)}>Open Themes</button>

      {isOpen && (
        <div className={styles.themePopUp}>
          <div className={styles.buttons}>
            {themesInfo.map((item) => (
              <ThemeButton color={item.color} theme={item.name} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
