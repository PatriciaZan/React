import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      {/* <Link to="/pricing">Pricing</Link> */}
      <Link to="/app">Go to App</Link>
    </div>
  );
}
