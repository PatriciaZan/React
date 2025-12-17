import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";
import Logo from "./Logo";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Products</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            log in
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
