import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Intro from './components/Intro';
import Footer from './components/Footer';
import './index.css';
import Project from './components/Projects';
import { Stack } from './components/Stack';
import Contact from './components/Contact';
import Loader from './components/Loader';

const App = () => {
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />; // Show loader while data is loading
  }

  return (
    <div>
      <Home />
      <Intro />
      <Stack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
