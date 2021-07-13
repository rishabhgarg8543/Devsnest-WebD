import React from "react";
import './App.css';
import Card from "./components/card";

function App(props) {
  return (
    <div className="App">
      <div className="full">
     <Card h1="Apple" p="You have consumed 10 cals today"/>
     <Card h1="Pizza" p="You have consumed 56 cals today"/>
     <Card h1="Burger" p="You have consumed 69 cals today"/>
     <Card h1="Coke" p="You have consumed 500 cals today"/>
     <Card h1="Eggs" p="You have consumed 155 cals today"/>
    </div>
    </div>
  );
}

export default App;
