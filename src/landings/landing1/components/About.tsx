import React from 'react';
import { motion, useInView } from 'framer-motion';
import { PenTool, DollarSign, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      title: 'Full Creative Control',
      text: 'On StorybyWriter, you retain complete control over your works — defining characters, plot, and world without restrictions or editorial demands.',
      Icon: PenTool,
    },
    {
      title: 'Global Audience',
      text: 'StorybyWriter lets you publish your works and receive feedback from readers worldwide, attracting a global audience.',
      Icon: Globe,
    },
    {
      title: 'Generous Bonuses & Royalties',
      text: 'Authors receive competitive royalties, bonuses, and opportunities for book adaptations, helping you earn and grow your stories.',
      Icon: DollarSign,
    },
    {
      title: 'Resources for Growth',
      text: 'The platform provides educational resources and helpful tips to improve your skills and advance professionally.',
      Icon: BookOpen,
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-150px' });

  return (
    <section
      ref={ref}
      className="min-h-screen py-12 px-6 bg-black flex flex-col justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-xl md:text-4xl font-bold text-center text-white mb-12 font-serif"
        >
          Why Choose StorybyWriter?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{
                duration: 1,
                delay: index * 0.4,
                ease: [0.3, 0.5, 0.51, 0.1],
              }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="mb-3 text-white">
                <benefit.Icon size={50} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-1 font-serif">
                {benefit.title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed">
                {benefit.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
