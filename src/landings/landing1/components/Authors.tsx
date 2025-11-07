import React from 'react';

const Authors = () => {
  return (
    <>
      <section className="py-20 bg-gradient-to-t from-black to-black/50 min-h-screen">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-serif">
          Authors
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 max-w-5xl mx-auto">
          <div className="flex justify-center w-full md:w-auto">
            <div className="relative">
              <div
                className="bg-white p-3 pt-7 pb-16 shadow-2xl"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                }}
              >
                <div className="relative -mt-4">
                  <img
                    src="/authors.webp"
                    alt="Authors on StorybyWriter"
                    className="w-full h-auto max-h-60 sm:max-h-72 md:max-h-80 object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md text-center md:text-left">
            <p className="text-sm md:text-lg text-white leading-relaxed">
              We put authors first. Our platform empowers you with the tools and
              support needed to bring your stories to life. You retain full
              creative control over your narratives, characters, and worlds. Our
              AI-powered promotion system ensures every book gets a chance to
              shine.
            </p>
            <p className="text-sm md:text-lg text-white leading-relaxed mt-4">
              We offer industry-leading benefits, including a bonus system,
              royalties, and book adaptations. Whether you&apos;re a rising star
              or an experienced writer, our educational blog provides valuable
              resources to enhance your craft.
            </p>
            <p className="text-sm md:text-lg text-white leading-relaxed mt-4">
              We are committed to making our platform the best place for you to
              write, connect, and thrive. Join us — and let&apos;s create
              stories that resonate and inspire.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Authors;
