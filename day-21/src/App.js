import React, { useState , useEffect} from "react";
import Footer from "./components/Footer"
import './style1.css';
import Card from "./components/card";
const Food = ({index, food, setFood, foods}) => {
  return(
    <div className="cartproducts">
    <div className="main">
      {food}
      <button onClick={() => {
            console.log("Delete = " , food);
            const newFoods = foods.filter((el,i) => i !== index);
            setFood(newFoods);
      }}>Remove from cart</button>
      </div>
    </div>
  );
};
function App(props) {
  const [value, setValue] = useState([]);
  const [num, setNum] = useState([]);
  const [foods, setFood] = useState([]);
  const [price, setPrice] = useState(0);
  let a,b;
  return (
    <div className="App">
      <div className="inputs">
      <input placeholder="Product name" type="text" className = "item" onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
      />
      <input placeholder="Price" type="number" className = "cal" onChange={(e) => {
        setNum(e.target.value);
      }}
      num={num}
      />
      
      </div>
      
      <button onClick={() => {
        // num?alert("price is missing"):
        if(num===""){
          alert("pice is mising");
        }
        else {
        setFood([...foods, <Card tittle={value} calorie={num}/>]);
        setValue("");
        setNum("");}
        a=parseInt(price,10);
      b=parseInt(num,10);
        setPrice(a+b)
        
      }}
      >Add to cart</button>
      {
        foods.map((food,index)=>(
          <Food key={index} food={food} foods={foods} setFood={setFood} index={index}/>
        ))
      }
      <h2>Delivery Charges - FREE</h2>
      <h1>Total Amount :- ₹ {price}</h1>
      
      <button>Place Order</button>
      <h2>Safe and Secure Payments. Easy returns. 100% Authentic products.</h2>
      <Footer/>
    </div>
  );
}

export default App;