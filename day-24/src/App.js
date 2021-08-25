import { BrowserRouter as Router,
  Route,
  Switch,
  Link } from 'react-router-dom';
  import './App.css';
  import {AuthContext} from './context/AuthContext';
  import About from './router/About';
  import Dashboard from './router/Dashboard';
  import Home from './router/Home';
  import Profile from './router/Profile';
  
  
  function App() {
    return (
      <div className="App">
        <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
             <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
             <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
          <Switch>
            <AuthContext>
            <Route exact path="/" component = {Home} />   
            <Route exact path="/about" component = {About} />    
            <Route exact path="/profile" component = {Profile} />    
            <Route exact path="/dashboard" component = {Dashboard} />
            </AuthContext>    
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default App;