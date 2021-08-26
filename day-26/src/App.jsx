import { useDispatch, useSelector } from 'react-redux';
import { nameSearch,nameSearch2 } from './actions';
import './App.css';

function App() {
  const count =useSelector(state =>state.counter)
  const count2 =useSelector(state =>state.counter2)
  const dispatch =useDispatch();
  return (
    <div className="App">
      <h1>Username</h1>
    <input type ="text" placeholder="Username" onChange= {(event) => dispatch(nameSearch(event.target.value))}></input>
      
      <h1>Email</h1>
    <input type ="text" placeholder="Email" onChange= {(event) => dispatch(nameSearch2(event.target.value))}></input>
    <h1>Output:-</h1>
    <div>Username:-</div>
    <span>{count}</span>
    <div>Email:-</div>
      <span>{count2}</span>
      
    </div>
  );
}

export default App;
