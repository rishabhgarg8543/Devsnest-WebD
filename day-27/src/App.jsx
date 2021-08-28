import AddTodo from './components/AddTodo';

import './App.css';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <div className="App">
      Todo List
      <AddTodo/>
      <ListTodo/>
    </div>
  );
}

export default App;
