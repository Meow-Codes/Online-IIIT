'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, motion, useAnimation } from 'framer-motion';

export default function Info() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controls = useAnimation();

    const [counts, setCounts] = useState({
        alumni: 0,
        faculty: 0,
        publications: 0,
    });

    // Smooth count-up logic
    useEffect(() => {
        if (isInView) {
            const targets = { alumni: 650, faculty: 60, publications: 250 };
            const duration = 1500;
            const startTime = performance.now();

            const animateCount = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);

                setCounts({
                    alumni: Math.floor(progress * targets.alumni),
                    faculty: Math.floor(progress * targets.faculty),
                    publications: Math.floor(progress * targets.publications),
                });

                if (progress < 1) requestAnimationFrame(animateCount);
            };

            requestAnimationFrame(animateCount);
        }
    }, [isInView]);

    return (
        <div ref={ref}>
            <section className="relative text-center bg-[#041b39]">
                <div className="container mx-auto px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-3">

                        {/* Alumni */}
                        <div className="py-8 border-r border-white">
                            <div className="relative">
                                <motion.h3
                                    className="text-4xl font-bold text-white inline-block mr-1"
                                    animate={controls}
                                >
                                    {counts.alumni}
                                </motion.h3>
                                <span className="text-4xl font-bold text-white inline-block ml-1">+</span>
                                <p className="text-white text-lg font-semibold mt-2">Alumni</p>
                            </div>
                        </div>

                        {/* Faculty */}
                        <div className="py-8 bg-white border-r border-gray-300">
                            <div className="relative">
                                <motion.h3
                                    className="text-4xl font-bold text-gray-900 inline-block mr-1"
                                    animate={controls}
                                >
                                    {counts.faculty}
                                </motion.h3>
                                <span className="text-4xl font-bold text-gray-900 inline-block ml-1">+</span>
                                <p className="text-blue-900 text-lg font-semibold mt-2">Faculty</p>
                            </div>
                        </div>

                        {/* Publications */}
                        <div className="py-8">
                            <div className="relative">
                                <motion.h3
                                    className="text-4xl font-bold text-white inline-block mr-1"
                                    animate={controls}
                                >
                                    {counts.publications}
                                </motion.h3>
                                <span className="text-4xl font-bold text-white inline-block ml-1">+</span>
                                <p className="text-white text-lg font-semibold mt-2">Publications</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
