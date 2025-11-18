'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Director() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    return (
        <div>
            <section ref={sectionRef} className="relative pt-12 h-[20rem] lg:h-[35rem] bg-[#041b39]">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="flex items-center justify-center gap-4 py-8"
                    >
                        <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
                            <span className="w-10 h-0.5 bg-white" />
                            <span className="w-20 h-0.5 bg-white" />
                        </div>

                        <h2 className="text-lg md:text-2xl font-bold text-white uppercase text-center">
                            MESSAGE FROM THE DIRECTOR
                        </h2>

                        <div className="flex flex-col gap-1">
                            <span className="w-10 h-0.5 bg-white" />
                            <span className="w-20 h-0.5 bg-white" />
                        </div>
                    </motion.div>

                    {/* Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex justify-center py-8"
                    >
                        <div className="bg-white p-4 shadow-md rounded-md w-full md:w-3/4">
                            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-md">
                                <video
                                    className="absolute top-0 left-0 w-full h-full rounded-md"
                                    controls
                                    poster="/VIDEO-SCRN-SHOOT.png"
                                >
                                    <source src="/Director_vd-new.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
