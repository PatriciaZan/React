import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
//import App from './App.jsx'
import StartRating from "./components/StartRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StartRating
      maxRating={10}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
      // onSetRating={setMovieRating}
    />
  </StrictMode>
);
