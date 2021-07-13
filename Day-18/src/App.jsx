import Card from "./components/card";
import Wcard from "./components/wcard";
import "./style.css";

function First() {
  return(
    <div className="Line1" style={ { display: 'inline-block'} } >
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
    <div className="Line1" style={ {display: 'inline-block'}}>
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

const chess={
minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    border: '20px solid brown',
    backgroundColor: 'burlywood',
}

const ch={
height: '420px',
    width: '420px',
    border: '10px solid black',
    margin: 'auto',
}
function App() {
  return (
  <div className="Chess" style={chess}>
    <div className="Ch" style ={ch}>
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