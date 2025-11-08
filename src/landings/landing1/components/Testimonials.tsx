import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: 'StorybyWriter helped me find my first readers. Thanks to their feedback, I improved my novel — and now it’s in the top!',
      author: '— Anna K., fantasy author',
      rating: 5,
    },
    {
      text: 'Simple platform, honest royalties, and fast payouts. Finally, I’m earning from my stories.',
      author: '— Max R., screenwriter',
      rating: 5,
    },
    {
      text: 'I received constructive advice from the community here. My detective novel became so much stronger.',
      author: '— Olena S., thriller author',
      rating: 5,
    },
  ];

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section ref={ref} className="pb-16 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Заголовок */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-bold text-center text-white mb-12 font-serif"
        >
          What Authors Say
        </motion.h2>

        {/* Відгуки */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: 'easeOut',
              }}
              className="flex flex-col bg-white/5 backdrop-blur-sm rounded-xl p-6 
                         border border-white/10 shadow-lg"
            >
              <Quote className="w-8 h-8 text-white/30 mb-4" />

              <p className="text-sm text-white/80 leading-relaxed flex-1 mb-4">
                {review.text}
              </p>

              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              <p className="text-xs text-white/60 font-medium">
                {review.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
