import Card from "./components/card";
import Wcard from "./components/wcard";
import "./style.css";

function First() {
  return(
    <div className="Line1">
      <Card/>
    <Wcard/>
      <Card/>
    <Wcard/>
      <Card/>
    <Wcard/>
      <Card/>
    <Wcard/>
    </div>
  )
}
function Second() {
  return(
    <div className="Line1">
    <Wcard/>
      <Card/>
    <Wcard/>
      <Card/>
    <Wcard/>
      <Card/>
    <Wcard/>
    <Card/>
    </div>
  )
}

function App() {
  return (
  <div className="Chess">
    <div className="Ch">
    <First/>
    <Second/>
    <First/>
    <Second/>
    <First/>
    <Second/>
    <First/>
    <Second/>
    </div>
  </div>
  );
}


export default App;