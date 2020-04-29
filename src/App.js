import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<<<<<<< HEAD
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
=======
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> parent of b3b5d03... Basic Routing complete
  );
}

export default App;
