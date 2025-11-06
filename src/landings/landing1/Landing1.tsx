// src/landings/landing1/Landing1.tsx
import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Authors from './components/Authors';
import Footer from './components/Footer';

const Landing1: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/bg.webp')" }}
        />
        {/* <div className="absolute inset-0 bg-black/50" /> */}
        <div className="relative z-10">
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="authors">
            <Authors />
          </section>
        </div>
      </div>
      <section id="contacts">
        <Footer />
      </section>
    </>
  );
};

export default Landing1;
