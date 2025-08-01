import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const flowersData = [
  {
    name: "Cherry",
    bloom: "July - August",
    color: "pink",
    photoName: "flowers/Cherry.jpg",
  },
  {
    name: "Orange Rose",
    bloom: "Spring - Summer",
    color: "Orange",
    photoName: "flowers/Orange_Rose.jpg",
  },
  {
    name: "Petaled Flower",
    bloom: "All Year",
    color: "Many Colors",
    photoName: "flowers/",
  },
  {
    name: "Pink Rose",
    bloom: "Spring - Summer",
    color: "Dark Pink",
    photoName: "flowers",
  },
  {
    name: "Sun Flower",
    bloom: "Summer - Autumn",
    color: "Yellow",
    photoName: "flowers",
  },
  {
    name: "Tulip FLower",
    bloom: "March - May",
    color: "Many Colors",
    photoName: "flowers",
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Flower Colection.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Flower Types</h2>
      <Flowers
        name="Cherry"
        bloom="July - August"
        color="Light Pink"
        photo={require("./flowers/Cherry.jpg")}
      />

      <Flowers
        name="Orange Rose"
        bloom="Spring - Summer"
        color="Orange"
        photo={require("./flowers/Orange_Rose.jpg")}
      />
    </main>
  );
}

function Flowers(props) {
  console.log(props);
  return (
    <div className="flower">
      <img src={props.photo} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>They bloom: {props.bloom}</p>
        <span>Color: {props.color}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  //console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We're current open for photo submits.
    </footer>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
