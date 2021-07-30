import React, { useState } from "react";
import Content from "./components/Content";
import "./style.css";

const data = [
  ["Strawberry", 32],
  ["Whole Grain Toast", 288],
  ["Eggs", 155],
  ["Salad", 11],
  ["Mushroom", 22],
  ["Cod", 84],
  ["Chesse", 72],
  ["Strawberry", 32],
];

function App() {
  const [card, setCard] = useState(data);
  return (
    <div>
      <Content card={card} setCard={setCard} />
    </div>
  );
}

export default App;
