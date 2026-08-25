import { useEffect, useState } from 'react';
import Background from './Background';
import Preloader from './Preloader';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import SeniorDev from './SeniorDev';
import TechStack from './TechStack';
import Stats from './Stats';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020a0f] font-sans">
      <Background />
      <Preloader />
      <div
        className={`relative z-10 transition-opacity duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <SeniorDev />
          <TechStack />
          <Stats />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
