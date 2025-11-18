'use client';
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import workingThumb from "../../../assets/dsai/workingThumb.webp";
import { FaCheck } from 'react-icons/fa';

export default function Whyiit() {
    const programmeData = {
        title: " Why Choose IIIT Dharwad? ",
        subtitle: "India's Next Frontier for Data Science & AI Education ",
        points: [
            "India's Newest & Fastest-Growing IIIT: One of the most dynamic institutes among the 21 IIITs.",
            "Industry-Aligned Curriculum: Programs tailored to meet global AI and tech demands.",
            "Institute of National Importance: IIIT Dharwad enjoys full academic freedom where learners choose their specialization and electives.",
            "Strong Alumni Network: Full privileges as an IIIT Dharwad graduate.",
        ],
        imageSrc: workingThumb,
        imageAlt: "Man working on a laptop",
    };

    const { title, points, imageSrc, imageAlt, subtitle } = programmeData;

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
                duration: 0.6,
                ease: "easeInOut"
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    const listItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    };

    return (
        <motion.div
            className="py-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
                <div className="flex justify-center">
                    <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end p-2">
                        <span className="w-10 h-0.5 bg-[#041b39]" />
                        <span className="w-20 h-0.5 bg-[#041b39]" />
                    </div>
                    <motion.h2
                        className="text-2xl font-semibold text-center relative text-uppercase inline-block pb-3"
                        variants={textVariants}
                    >
                        {title}
                    </motion.h2>
                    <div className="flex flex-col gap-1 p-2">
                        <span className="w-10 h-0.5 bg-[#041b39]" />
                        <span className="w-20 h-0.5 bg-[#041b39]" />
                    </div>
                </div>
                <motion.p
                    className="text-[#3D3D3D] text-center font-semibold text-xl"
                    variants={textVariants}
                >
                    {subtitle}
                </motion.p>
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
                    <div className="flex flex-col gap-4 w-full md:w-1/2">
                        <ul className="list-none pl-0 text-gray-700">
                            {points.map((point, index) => (
                                <motion.li
                                    key={index}
                                    className="flex justify-start items-center py-2 border-b border-gray-300"
                                    variants={listItemVariants}
                                >
                                    <div className="rounded-full border border-gray-700 text-gray-700 mr-4 flex items-center justify-center w-5 h-5 px-1">
                                        <FaCheck size={15} />
                                    </div>
                                    <span>{point}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};




