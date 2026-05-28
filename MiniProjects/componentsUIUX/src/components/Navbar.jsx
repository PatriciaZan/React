import React from "react";
import styles from "../styles/components/navbar.module.scss";
import Theme from "./action/Theme";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="">LOGO</NavLink>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Light/Dark</button>
        </li>
        <li>
          <Theme />
        </li>
        <li>
          <button>GitHub</button>
        </li>
      </ul>
    </nav>
  );
}
