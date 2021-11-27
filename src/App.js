import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import About from './aboutus';
import Home from './nav';
function App() {
  return (
    
    <div className="App">
      <About/>
      <Home/>
      <h1>hai</h1>
      

      {/* <Router>

<Route path="/">
  <Nav/>
</Route>



</Router> */}
    </div>
  );
}

export default App;
