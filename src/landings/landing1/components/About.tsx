import React from 'react';

const About = () => {
  return (
    <>
      <section className="py-20 bg-black">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 max-w-5xl mx-auto">
          <div className="max-w-md text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
              Платформа, де історії оживають
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              StorybyWriter is a powerful all-in-one publishing platform for
              writers to create, share, and earn from their stories, whether
              they be novels, scripts, or more. With more than{' '}
              <strong className="text-white/70">28 000 authors</strong>,
              StorybyWriter helps authors get initial audience, feedback, and
              suggestions from readers all over the world.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div
                className="bg-white p-3 pt-7 pb-16 shadow-2xl"
                style={{
                  width: '380px',
                  maxWidth: '100%',
                }}
              >
                <div className="relative -mt-4">
                  <img
                    src="/about-image.webp"
                    alt="Письменники на StorybyWriter"
                    className="w-full h-80 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
