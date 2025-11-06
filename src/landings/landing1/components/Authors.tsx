import React from 'react';

const Authors = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-t from-black to-black/50 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Authors
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 max-w-5xl mx-auto">
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
                    src="/authors.webp"
                    alt="Authors on StorybyWriter"
                    className="w-full h-80 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md text-center md:text-left">
            <p className="text-lg text-white leading-relaxed">
              We put authors first. Our platform is designed to empower you —
              providing the tools and support you need to bring your stories to
              life.
            </p>
            <p className="text-lg text-white leading-relaxed mt-4">
              You retain full creative control over your narratives, characters,
              and worlds. We believe in clarity and honesty, so our AI-powered
              automatic promotion system was created to give every book a chance
              to shine. We offer industry-leading benefits and perks for our
              writers, including a bonus system, royalties, and book
              adaptations. And finally — whether you’re a rising star or an
              experienced writer — our educational blog provides valuable
              resources to refine your craft.
            </p>
            <p className="text-lg text-white leading-relaxed mt-4">
              We are committed to making our platform the best place for you to
              write, connect, and thrive. Join us — and let’s tell stories that
              resonate and inspire.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authors;
