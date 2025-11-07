import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, DollarSign, BookOpen, Globe } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      title: 'Повний творчий контроль',
      text: 'На StorybyWriter ви зберігаєте повний контроль над своїми творами — визначаєте персонажів, сюжет і світ без обмежень чи редакційних вимог.',
      Icon: PenTool,
    },
    {
      title: 'Щедрі бонуси та роялті',
      text: 'Автори отримують конкурентні роялті, бонуси та можливості для адаптацій книг, що дозволяє заробляти та розвивати свої твори.',
      Icon: DollarSign,
    },
    {
      title: 'Ресурси для розвитку',
      text: 'Платформа надає освітні ресурси та корисні поради для вдосконалення навичок і професійного зростання.',
      Icon: BookOpen,
    },
    {
      title: 'Міжнародна аудиторія',
      text: 'StorybyWriter дозволяє публікувати твори та отримувати відгуки від читачів з усього світу, привертаючи глобальну аудиторію.',
      Icon: Globe,
    },
  ];

  return (
    <section className="min-h-screen py-12 px-6 bg-black flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-4xl font-bold text-center text-white mb-8 font-serif"
        >
          Чому обирають StorybyWriter?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: 'easeOut',
              }}
              className="flex flex-col items-center text-center p-4 backdrop-blur-sm 
                         rounded-lg shadow-sm"
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
