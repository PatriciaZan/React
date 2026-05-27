import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Display from "./Display";
import HeroCall from "../components/HeroCall";

export default function Layout() {
  return (
    <div>
      {/* PAGE MAIN NAVBAR */}
      <Navbar />
      <HeroCall />
      {/* PAGE SUB NAVBAR */}
      <nav>
        <NavLink to="">Components</NavLink>
        <NavLink to="structure">Structure</NavLink>
        <NavLink to="responsive">Responsivenes</NavLink>
      </nav>
      <Display />
    </div>
  );
}
