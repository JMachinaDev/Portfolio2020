import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './Main.js';// Main title/ About Me / Skills
import ContactUs from './contactForm'; // ContactForm
import Nav from './App';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <MainPage />
    <ContactUs />
    
  </React.StrictMode>,
  document.getElementById('root')
);

