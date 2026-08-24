import React from 'react';
import './App.scss';

import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Terminal from './Components/Terminal';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Terminal />
      <Footer />
    </div>
  );
}

export default App;
