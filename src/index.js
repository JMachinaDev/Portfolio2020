import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/slider.css';


import MainSection from './app/mainSection.js';// Main title/ About Me / Skills
import ContactUs from './app/contactForm.js'; // ContactForm
import Navigation from './app/nav.js';
import Footer from './app/footer.js'; // Footer
import Testimonial from './app/testimonial.js'; // Testimonial Section
import Slider from './app/slider.js';

ReactDOM.render(
  <React.StrictMode>
    <Navigation />
    <MainSection />
    <Slider />
    <Testimonial />
    <ContactUs />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

