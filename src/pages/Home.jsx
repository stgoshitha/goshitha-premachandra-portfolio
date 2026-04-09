import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StarsCanvas from '../components/Stars';
import Contact from '../components/Contact';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import About from '../components/About';
import NavigationButton from '../components/NavigationButton';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="relative z-0 overflow-x-hidden bg-primary">
      <StarsCanvas />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
        <Hero id="home" />
        <NavigationButton id="about" />
      </div>
      <About id="about" />
      <WorkExperience id="experience" />
      <Education id="education" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
};

export default Home;
