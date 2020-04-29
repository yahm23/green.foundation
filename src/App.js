import React from 'react';
import logo from './logo.svg';
import './App.css';

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

export default App;
