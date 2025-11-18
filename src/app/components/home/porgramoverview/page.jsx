'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Porgramm() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <div className="max-w-7xl m-auto">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'show' : 'hidden'}
                className="text-center my-4"
            >
                {/* Title Section */}
                <motion.div variants={fadeInUp}>
                    <div className="flex items-center justify-center gap-4 pt-8">
                        {/* Left Bars */}
                        <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
                            <span className="w-10 h-0.5 bg-[#041b39]" />
                            <span className="w-20 h-0.5 bg-[#041b39]" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-lg md:text-2xl font-bold text-gray-900 uppercase text-center">
                            PROGRAM OVERVIEW
                        </h2>

                        {/* Right Bars */}
                        <div className="flex flex-col gap-1">
                            <span className="w-10 h-0.5 bg-[#041b39]" />
                            <span className="w-20 h-0.5 bg-[#041b39]" />
                        </div>
                    </div>
                </motion.div>

                {/* Body Section */}
                <motion.p
                    variants={fadeInUp}
                    className="py-4 mx-auto text-gray-700 text-base md:text-lg leading-relaxed"
                >
                    The M.Tech. in Data Science and Artificial Intelligence (DSAI) at IIIT Dharwad is designed to address the growing demand
                    for professionals skilled in advanced AI and data science. This DSAI Program emphasizes the integration of theory with
                    practical skills in AI technologies, including machine learning, deep learning, natural language processing, and AI for
                    finance and health. Real-world problem-solving, through intensive project work, prepares students for roles in the research
                    industry and entrepreneurship.
                </motion.p>
            </motion.div>
        </div>
    );
}
