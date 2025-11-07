import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Authors from './components/Authors';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

const Landing1: React.FC = () => {
  return (
    <>
      <Header />
      <div className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/bg.webp')" }}
        />
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
      <section id="testimonials">
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Landing1;
