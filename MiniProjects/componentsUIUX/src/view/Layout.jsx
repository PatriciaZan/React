import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/display/Navbar";
import Display from "./Display";
import HeroCall from "../components/display/HeroCall";

export default function Layout() {
  return (
    <div>
      {/* PAGE MAIN NAVBAR */}
      <Navbar />
      <HeroCall />
      {/* PAGE SUB NAVBAR */}
      <nav>
        <NavLink to="">NavBar</NavLink>
        <NavLink to="banners">banners</NavLink>
        <NavLink to="cards">cards</NavLink>
      </nav>
      <Display />
    </div>
  );
}
