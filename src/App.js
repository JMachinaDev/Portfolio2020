// import logo from './logo.svg';
// import './App.css';
import React from 'react';

function App() {
  return (
  <Navbar>
    <NavItem icon="Menu" />
    <NavItem icon="About" />
    <NavItem icon="Menu" />
  </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{ props.children }</ul>
    </nav>
  );
}

function NavItem(props){
  return (
    <li>
      <a href="#" className="icon-button"> 
        {props.icon}
      </a>
    </li>
  )
}

export default App;
