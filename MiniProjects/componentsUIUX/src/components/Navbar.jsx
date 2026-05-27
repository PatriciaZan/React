import React from "react";
import styles from "../styles/components/navbar.module.scss";
import Theme from "./action/Theme";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>LOGO</li>
        <li>About</li>
        <li>Light/Dark</li>
        <li>
          <Theme />
        </li>
        <li>GitHub</li>
      </ul>
    </nav>
  );
}
