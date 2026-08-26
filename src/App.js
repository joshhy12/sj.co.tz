import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BuildWebsitePage from './pages/BuildWebsitePage';

import './styles/App.css';

function App() {
  const [activeView, setActiveView] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const path = window.location.pathname;
    if (hash === 'website-builder' || hash === 'build-website' || path === '/build-website') {
      return 'website-builder';
    }
    return 'home';
  });

  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#00f2ff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#00f2ff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 0.5,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }

    // Handle initial page load with hash and browser navigation
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'website-builder' || hash === 'build-website') {
        setActiveView('website-builder');
      } else if (hash) {
        setActiveView('home');
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - offset,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    };

    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  const handleNavigate = (targetId) => {
    if (targetId === 'website-builder' || targetId === 'build-website') {
      setActiveView('website-builder');
      window.history.pushState(null, null, '#website-builder');
      window.scrollTo(0, 0);
    } else {
      setActiveView('home');
      window.history.pushState(null, null, `#${targetId}`);
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
        } else if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <div className="App">
      {/* Particle Background */}
      <div id="particles-js"></div>
      
      {/* Floating Elements */}
      <div className="floating-element floating-1"></div>
      <div className="floating-element floating-2"></div>
      
      {/* Header */}
      <Header activePage={activeView} onNavigate={handleNavigate} />

      {activeView === 'website-builder' ? (
        /* SEPARATE BUILD WEBSITE DEDICATED PAGE */
        <BuildWebsitePage onNavigateHome={() => handleNavigate('home')} />
      ) : (
        /* MAIN LANDING PAGE SECTIONS */
        <>
          {/* Hero Section */}
          <Hero onNavigate={handleNavigate} />
          
          {/* Services Section */}
          <Services />
          
          {/* Projects Section */}
          <Projects />
          
          {/* About Section */}
          <About />
          
          {/* Contact Section */}
          <Contact />
        </>
      )}
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;