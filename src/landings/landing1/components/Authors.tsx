import React from 'react';
import { motion, useInView } from 'framer-motion';

const Authors = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-t from-black to-black/50 min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center font-serif"
      >
        Authors
      </motion.h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, x: 0, scale: 1 }
              : { opacity: 0, x: -50, scale: 0.95 }
          }
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center w-full md:w-auto"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="max-w-md text-center md:text-left space-y-4"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-sm md:text-lg text-white leading-relaxed"
          >
            We put authors first. Our platform empowers you with the tools and
            support needed to bring your stories to life. You retain full
            creative control over your narratives, characters, and worlds. Our
            AI-powered promotion system ensures every book gets a chance to
            shine.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm md:text-lg text-white leading-relaxed"
          >
            We offer industry-leading benefits, including a bonus system,
            royalties, and book adaptations. Whether you&apos;re a rising star
            or an experienced writer, our educational blog provides valuable
            resources to enhance your craft.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm md:text-lg text-white leading-relaxed"
          >
            We are committed to making our platform the best place for you to
            write, connect, and thrive. Join us — and let&apos;s create stories
            that resonate and inspire.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Authors;
