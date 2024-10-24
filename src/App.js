import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import Blog from './components/Blog';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='relative overflow-hidden'>
      <Hero />
      <Features />
      </div>
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
