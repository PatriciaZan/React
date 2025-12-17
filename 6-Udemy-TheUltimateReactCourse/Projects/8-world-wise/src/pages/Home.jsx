import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      Home
      {/* <Link to="/pricing">Pricing</Link> */}
    </div>
  );
}
