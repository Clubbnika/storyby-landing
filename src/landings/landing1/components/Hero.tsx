import React from 'react';
import ContactForm from './HeroContent';

const Hero = () => {
  return (
    <section className="min-h-screen items-center justify-center p-4 flex flex-col gap-7">
      <h1
        className="text-4xl md:text-8xl lg:text-9xl font-bold text-white text-center leading-tight font-serif mt-10"
        style={{
          textShadow: `
            0 0 10px rgba(0,0,0,0.8),
            0 0 20px rgba(0,0,0,0.7),
            0 0 30px rgba(0,0,0,0.6),
            0 0 40px rgba(0,0,0,0.5)
          `,
          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))',
        }}
      >
        Welcome to StorybyWriter.
      </h1>
      <ContactForm />
    </section>
  );
};

export default Hero;
