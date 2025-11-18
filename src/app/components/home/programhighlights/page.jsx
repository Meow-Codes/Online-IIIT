'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import icon1 from '../../../assets/home/programhighlights/icon1.svg';
import icon2 from '../../../assets/home/programhighlights/icon2.svg';
import icon3 from '../../../assets/home/programhighlights/icon3.svg';
import icon4 from '../../../assets/home/programhighlights/icon4.svg';
import icon5 from '../../../assets/home/programhighlights/icon5.svg';
import icon6 from '../../../assets/home/programhighlights/icon6.svg';

const highlights = [
    { icon: icon1, text: 'Industry-aligned curriculum' },
    { icon: icon2, text: 'LIVE classes with optional 7-day free campus immersion*' },
    { icon: icon3, text: 'Specialization tracks in NLP, Computer Vision, Generative AI, and more.' },
    { icon: icon4, text: 'The degree is equivalent to on-campus M.Tech' },
    { icon: icon5, text: 'Project-based learning for hands-on experience' },
    { icon: icon6, text: 'Flexible re-entry & multi-exit options' },
];

export default function Programhighlight() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div className='max-w-7xl m-auto my-4'>
            <section ref={sectionRef} className="relative bg-white">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center gap-4 pt-8 mb-6"
                    >
                        <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
                            <span className="w-10 h-0.5 bg-[#041b39]" />
                            <span className="w-20 h-0.5 bg-[#041b39]" />
                        </div>
                        <h2 className="text-lg md:text-2xl font-bold text-gray-900 uppercase text-center">
                            PROGRAM HIGHLIGHTS
                        </h2>
                        <div className="flex flex-col gap-1">
                            <span className="w-10 h-0.5 bg-[#041b39]" />
                            <span className="w-20 h-0.5 bg-[#041b39]" />
                        </div>
                    </motion.div>

                    {/* Highlights Grid */}
                    <div className="flex flex-wrap justify-start gap-6">
                        {highlights.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.4 + idx * 0.2 }}
                                whileHover={{ scale: 1.03, boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)' }}
                                className="group flex-1 min-w-[150px] max-w-sm bg-white rounded-xl p-4 shadow hover:bg-[#041b39] transition duration-300 cursor-pointer"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <motion.div
                                        className="mb-3"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt="icon"
                                            className="w-16 h-16 transition duration-300 group-hover:invert group-hover:brightness-0"
                                        />
                                    </motion.div>
                                    <h5 className="text-md text-gray-800 font-medium group-hover:text-white transition duration-300">
                                        {item.text}
                                    </h5>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
