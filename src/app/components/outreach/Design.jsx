"use client";
import React from "react";
import Image from "next/image";
import workingThumb from "../../assets/dsai/workingThumb.webp";
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const OutreachDetails = () => {
  const programmeData = {
    title: " THIS PROGRAMME IS EXCLUSIVELY designed FOR ",
    points: [
      " Working professionals and industry leaders seeking technological transformation. ",
      "Designed to accommodate both corporate-sponsored participants and individual learners, the programme bridges academic rigor with practical innovation. ",
      "Recent graduates or freshers (not employed) are eligible to apply and will receive a guaranteed two-year full-time internship that translates academic learning into marketable industry skills.",
    ],
    imageSrc: workingThumb,
    imageAlt: "Man working on a laptop",
  };

  const { title, points, imageSrc, imageAlt } = programmeData;

  return (
    <motion.div
      className="bg-[#E5E5E5] py-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-0">
        <div className="flex justify-center">
          <motion.h2
            className="text-xl font-semibold text-center text-gray-800 relative text-uppercase inline-block pb-3"
            variants={headingVariants}
          >
            {title}
            <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-neutral-800"></span>
            <span className="absolute left-1/2 bottom-[-2.5px] -translate-x-1/2 h-[5px] w-16 bg-neutral-900"></span>
          </motion.h2>
        </div>
        <div className="container flex flex-col md:flex-row items-center gap-10 md:gap-24 pt-10">
          {/* Image Section */}
          <motion.div className="w-full md:w-1/2" variants={imageVariants}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="rounded-md shadow-md transition-transform duration-200 ease-in-out hover:scale-105"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div className="flex flex-col gap-4 w-full md:w-1/2" variants={textVariants}>
            <ul className="list-none pl-0 text-gray-700">
              {points.map((point, index) => (
                <motion.li key={index} className="flex justify-start items-center py-2 border-b border-gray-300" variants={textVariants} transition={{ delay: 0.1 * (index + 1) }}>
                  <div className="rounded-full border border-gray-700 text-gray-700 mr-4 flex items-center justify-center w-5 h-5 px-1">
                    <FaCheck size={15} />
                  </div>
                  <span className="text-[18px]">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OutreachDetails;