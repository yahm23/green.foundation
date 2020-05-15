import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import Home from './pages/home.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Blog from './pages/blog.js';

function App() {
  return (
    <Router>
      <nav>
        <ul className="navbar">
          <h3><Link to='/'>Home</Link></h3>
          <h3><Link to='/about'>About</Link></h3>
          <h3><Link to='/Blog'>Blog</Link></h3>
          <h3><Link to='/contact'>Contact</Link></h3>
        </ul>  
      </nav>
      <Switch>
        <Route path='/' exact component ={Home}/>
        <Route path='/about' component ={About}/>
        <Route path='/contact' component ={Contact}/>
        <Route path='/Blog' component ={Blog}/>

        <Route render={()=><h1> 404: Page not found</h1>}/>
      </Switch>
    </Router>
  );
}

export default App;
