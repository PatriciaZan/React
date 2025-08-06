import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const flowersData = [
  {
    name: "Cherry",
    bloom: "July - August",
    color: "pink",
    photoName: "./flowers/Cherry.jpg",
    soldOlt: true,
  },
  {
    name: "Orange Rose",
    bloom: "Spring - Summer",
    color: "Orange",
    photoName: "flowers/Orange_Rose.jpg",
    soldOlt: false,
  },
  {
    name: "Petaled Flower",
    bloom: "All Year",
    color: "Many Colors",
    photoName: "flowers/Peraled_Flowers.jpg",
    soldOlt: false,
  },
  {
    name: "Pink Rose",
    bloom: "Spring - Summer",
    color: "Dark Pink",
    photoName: "flowers/Pink_Rose.jpg",
    soldOlt: false,
  },
  {
    name: "Sun Flower",
    bloom: "Summer - Autumn",
    color: "Yellow",
    photoName: "flowers/Sun_Flower.jpg",
    soldOlt: false,
  },
  {
    name: "Tulip FLower",
    bloom: "March - May",
    color: "Many Colors",
    photoName: "flowers/Tulip.jpg",
    soldOlt: false,
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
      <h1 style={style}>Flower Collection.</h1>
    </header>
  );
}

function Menu() {
  const flowers = flowersData;
  const numFlowers = flowers.length;

  return (
    <main className="menu">
      <h2>Our Flower Types</h2>

      {numFlowers > 0 ? (
        <React.Fragment>
          <p>We only display the best flowers photos!</p>
          <ul className="flowers">
            {flowers.map((flowers) => (
              <Flowers flowersObj={flowers} key={flowers.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're out of flowers photo submits! </p>
      )}

      {/* <Flowers
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
      /> */}
    </main>
  );
}

function Flowers({ flowersObj }) {
  //console.log(props);
  //console.log(flowersObj);

  if (flowersObj.soldOlt) return null;

  return (
    <li className={`flower ${flowersObj.soldOlt ? "sould-out" : ""}`}>
      <img src={flowersObj.photo} alt={flowersObj.name} />
      <div>
        <h3>{flowersObj.name}</h3>
        <p>They bloom: {flowersObj.bloom}</p>
        <span>
          Color: {flowersObj.soldOlt ? "Not available" : flowersObj.color}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  //console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  //if(!isOpen) return

  return (
    <footer className="footer">
      {isOpen && <Submit closeHour={closeHour} openHour={openHour} />}
    </footer>
  );
}

function Submit({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're current open for photo submits from {openHour}: until {closeHour}
        :00.
      </p>
      <button className="btn">Submit</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
