import React,{useState} from 'react';
const Card =() =>{
    const [count,setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={()=>{
        setCount(count+1);
      }
    }>{count}</button>
    </div>
  );
};

export default Card;