import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IncCounter, DecCounter } from './actions';
import { reducerType } from './reducers';
import './App.css';
function App() {

  const dispatch = useDispatch();
  const counter = useSelector((state: reducerType) => state.counter);

  return (
    <div className="App">
      <button onClick = {() => {
        dispatch(DecCounter());
      }}>-</button>
      <div>{counter}</div>
      <button onClick = {() => {
        dispatch(IncCounter());
      }}>+</button>      
    </div>
  );
}

export default App;
