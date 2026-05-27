import React from "react";
import { NavLink, Outlet } from "react-router";

export default function ResponsiveDisplay() {
  return (
    <section>
      <h3>Responsive</h3>
      <nav>
        <NavLink to="">Fonts</NavLink>
        <NavLink to="grid">Grid</NavLink>
        <NavLink to="flexbox">FlexBox</NavLink>
      </nav>

      <Outlet />
    </section>
  );
}
