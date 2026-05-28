import styles from "../styles/components/heroCall.module.scss";
import React from "react";

export default function HeroCall() {
  return (
    <div>
      <span>version 1.0</span>
      <h1>React Study</h1>
      <h1>Components | Structure and Responsiveness</h1>
      <p>
        Personal library for testing web and mobile. Build for practice and
        display of compoenents hand made by me :D
      </p>

      <div className={styles.teste}>
        <div className={styles.background}>background</div>
        <div className={styles.foreground}>foreground</div>
        <div className={styles.surface}>surface</div>
        <div className={styles.surfaceSec}>surfaceSec</div>
        <div className={styles.accent}>accent</div>
        <div className={styles.accentFore}>accentFore</div>
        <div className={styles.border}>border</div>
      </div>
    </div>
  );
}
