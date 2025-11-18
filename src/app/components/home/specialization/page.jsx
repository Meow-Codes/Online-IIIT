'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import nplspeech from '../../../assets/home/specializations/speech-bubble.svg';
import computerVersion from '../../../assets/home/specializations/vision.svg';
import aiassistant from '../../../assets/home/specializations/ai-assistant.svg';
import finacialanalytics from '../../../assets/home/specializations/finIcon.svg';
import healthAI from '../../../assets/home/specializations/hthIcon.svg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3, // delay after title
    },
  },
};

export default function Specialization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id='specialization'>
      <section className="relative py-10" id="specializations">
        <div className="container mx-auto px-4">
          {/* Title Section */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={fadeInUp}
            className="flex items-center justify-center gap-4 pt-8 mb-6"
          >
            {/* Left Bars */}
            <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
              <span className="w-10 h-0.5 bg-[#041b39]" />
              <span className="w-20 h-0.5 bg-[#041b39]" />
            </div>

            {/* Heading */}
            <h2 className="text-lg md:text-2xl font-bold text-gray-900 uppercase text-center">
              SPECIALIZATIONS
            </h2>

            {/* Right Bars */}
            <div className="flex flex-col gap-1">
              <span className="w-10 h-0.5 bg-[#041b39]" />
              <span className="w-20 h-0.5 bg-[#041b39]" />
            </div>
          </motion.div>

          {/* Grid of Specializations */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-start text-center"
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={containerVariants}
          >
            {[
              { title: 'NLP and Speech', icon: nplspeech, dark: true },
              { title: 'Computer Vision', icon: computerVersion },
              { title: 'Generative AI', icon: aiassistant, dark: true },
              { title: 'Financial Analytics', icon: finacialanalytics },
              { title: 'AI in Healthcare', icon: healthAI, dark: true },
            ].map(({ title, icon, dark }, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`rounded-xl p-6 shadow-lg ${dark ? 'bg-[#041b39] text-white' : 'bg-[#f0f0f0] text-gray-800'
                  }`}
              >
                <Image src={icon} alt={title} className="mx-auto w-18 h-18" />
                <h3 className="text-sm sm:text-base uppercase font-bold mt-3">{title}</h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Read More Button */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            className="text-center mt-8"
          >
            <a
              href="/specialization"
              className="relative inline-block w-[20rem] px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-[#041b39] overflow-hidden group transition-colors duration-500"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#041b39]">
                READ MORE
              </span>
              <span className="absolute left-1/2 top-0 h-full w-0 bg-white group-hover:w-full transition-all duration-500 -translate-x-1/2 z-0"></span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
