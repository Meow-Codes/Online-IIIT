'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import certifcation from '../../../assets/home/certification/Certification-DC.webp';

export default function Certification() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <div className="max-w-7xl m-auto">
            <section className="relative py-12 bg-white" ref={ref}>
                <div className="container mx-auto px-4">
                    <div className="relative z-10">
                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6 }}
                            className="mb-6 relative"
                        >
                            <h2 className="text-xl md:text-2xl font-bold uppercase inline-block text-left">
                                CERTIFICATION
                            </h2>
                            <span className="absolute right-[-10] top-1/2 -translate-y-1/2 w-8 h-1 bg-black ml-2" />
                            <span className="absolute right-[10] top-[calc(50%+7px)] w-20 h-1 bg-black ml-2" />
                        </motion.div>

                        {/* Body Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1.2, delay: 0.4 }}
                            className="flex flex-col lg:flex-row items-center gap-8"
                        >
                            {/* Left Image */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="w-full lg:w-5/12 text-center border rounded shadow cursor-pointer"
                            >
                                <Image
                                    src={certifcation}
                                    alt="Certification"
                                    className="w-full h-auto"
                                />
                            </motion.div>

                            {/* Right Content */}
                            <div className="w-full lg:w-7/12">
                                <div className="text-2xl font-semibold mb-4">Exit criteria</div>
                                <ul className="space-y-4 text-base sm:text-xl font-normal">
                                    {[
                                        'Candidates who complete 15 credits (1 semester) with foundational courses in DSAI, are eligible for PG Certification.',
                                        'Candidates who complete 30 credits (2 semesters), including core courses and elective specializations, are eligible for PG Diploma Certification.',
                                        'Candidates who complete 60 credits (4 semesters) including thesis and capstone project are eligible for the M.Tech Degree.'
                                    ].map((text, idx) => (
                                        <li key={idx} className="flex gap-2">
                                            <div>{idx + 1}.</div>
                                            <div>{text}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
