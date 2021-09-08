import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reducerType } from './reducers';
import './App.css';
import { addNote, deleteNote } from './actions';
function App() {

  const dispatch = useDispatch();
  const notes = useSelector((state: reducerType) => state.notes);
  const [input, setInput] = useState<string>("");
  return (
    <div className="App">
     <div>
      <input type="text" value = {input} onChange = { (e) => {
          setInput(e.target.value);
        } }/>
        <button onClick = {() => {
          dispatch(addNote(input));
          setInput("")
        }}>Add</button>
     </div>
     <div className="notes">
       {notes.length === 0 ? (
         <h2>Click to add notes</h2>
       ) : (
         <ul>
          {notes.map((note: string, index: number) => (
            <ul>
              <li key = {index}>
                <h3>{note}</h3>
                <button onClick = { () => {
                  dispatch(deleteNote(index));
                }}>Delete</button>
              </li>
            </ul>
            ))}
          </ul>
       )}
     </div>
     
    </div>
  );
}

export default App;
