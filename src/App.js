import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Page1 from './pages/page1.js';
import Page2 from './pages/page2.js';
// import { render } from '@testing-library/react';

function App() {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <h3><Link to='/'>Home</Link></h3>
          <h3><Link to='/about'>About</Link></h3>
          <h3><Link to='/page1'>Page 1</Link></h3>
          <h3><Link to='/page2'>Page 2</Link></h3>
          <h3><Link to='/contact'>Contact</Link></h3>
        </ul>
      </nav>
      <Switch>
        <Route path='/' exact component ={Home}/>
        <Route path='/about' component ={About}/>
        <Route path='/contact' component ={Contact}/>
        <Route path='/page1' component ={Page1}/>
        <Route path='/page2' component ={Page2}/>
        <Route render={()=><h1> 404: Page not found</h1>}/>
      </Switch>
    </Router>
  );
}

// const home = ()=>{
//   return(){render}
//   <Home></Home>
// }
// const about = ()=>{
//   <About></About>
// }
// const contact = ()=>{
//   <Contact></Contact>
// }
// const page1 = ()=>{
//   <Page1></Page1>
// }

// const page2 = ()=>{
//   <Page2></Page2>
// }

export default App;
