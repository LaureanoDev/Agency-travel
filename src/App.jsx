import React from 'react';
import Destinations from './components/Destinations';
import DownloadApp from './components/DownloadApp';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Services from './components/Services';
import Tours from './components/Tours';
import Testimonials from './Testimonials';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Destinations />
      <Offer />
      <Tours />
      <Testimonials />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
