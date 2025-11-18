'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import style from './page.module.css';
import Image from 'next/image';
import aboutThumb from '../../../assets/home/about/aboutThumb.webp';
import aboutBg from '../../../assets/home/about/aboutBg.webp';

export default function About() {
    const [showMore, setShowMore] = useState(false);
    const [visibleParagraphs, setVisibleParagraphs] = useState([false, false, false, false]);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const sectionRef = useRef(null);
    const [isBgFixed, setIsBgFixed] = useState(false);


    // Function to trigger animation in sequence
    const triggerAnimation = () => {
        setVisibleParagraphs([true, false, false, false]);

        setTimeout(() => setVisibleParagraphs([true, true, false, false]), 500);
        setTimeout(() => setVisibleParagraphs([true, true, true, false]), 1000);
        setTimeout(() => setVisibleParagraphs([true, true, true, true]), 1500);
    };

    // Use Intersection Observer to detect scroll into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                const [entry] = entries;
                if (entry.isIntersecting && !animationTriggered) {
                    triggerAnimation();
                    setAnimationTriggered(true);
                    setIsBgFixed(true); // Make background fixed
                    obs.disconnect(); // ✅ Use `obs` not `observer`
                }
            },
            {
                threshold: 0.4,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [animationTriggered]);

    return (
        <div
            className="bg-cover bg-center py-6"
            style={{
                backgroundImage: `url(${aboutBg.src})`,
                backgroundColor: 'rgba(230,230,230,0.9)',
                backgroundBlendMode: 'overlay',
                backgroundAttachment: isBgFixed ? 'fixed' : 'scroll',
            }}
            id='about'
        >
            <div className='max-w-7xl m-auto'>
                <div className="flex items-center justify-center gap-4 pt-8">
                    <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
                        <span className="w-10 h-0.5 bg-[#041b39]" />
                        <span className="w-20 h-0.5 bg-[#041b39]" />
                    </div>

                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 uppercase text-center">
                        About IIIT Dharwad
                    </h2>

                    <div className="flex flex-col gap-1">
                        <span className="w-10 h-0.5 bg-[#041b39]" />
                        <span className="w-20 h-0.5 bg-[#041b39]" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 py-4" ref={sectionRef}>
                    <div className="w-full md:w-5/12 order-2 md:order-2 rounded-[5.5rem] hidden md:block">
                        <div className="relative shadow-md border border-gray-200 rounded-lg overflow-hidden cursor-pointer">
                            <figure className={`${style['animate-image-transition']} overflow-hidden rounded-[5.5rem]`}>
                                <Image
                                    src={aboutThumb}
                                    alt="About IIIT Dharwad"
                                    className="w-full h-auto object-cover rounded-[5.5rem] transition-transform duration-700 ease-in-out hover:scale-115"
                                    placeholder="blur"
                                />
                                <div className="image-overlay"></div>
                            </figure>
                        </div>
                    </div>
                    <div className="w-full md:w-7/12 order-1 md:order-1">
                        <div className="hidden lg:block space-y-4 text-justify p-4 lg:p-0">
                            {[
                                "Indian Institute of Information Technology, Dharwad (IIIT Dharwad), established in 2015 through a unique Public-Private Partnership by the Ministry of Education, Government of India, in collaboration with the Government of Karnataka and industry partner Keonics, offers world-class education aligned with evolving industry requirements.",
                                "IIIT Dharwad offers B.Tech degree program in Computer Science and Engineering, Electronics and Communication Engineering, and Data Science and Artificial Intelligence, along with M.Tech (Research) and Ph.D. degree program. The institute is committed to helping India maintain its global leadership in IT and allied domains.",
                                "As an Institute of National Importance, IIIT Dharwad distinguishes itself by focusing on Application information technology to address socially relevant challenges in India. Its academic philosophy emphasizes creating technological innovations that are meaningful, contextual, and transformative for the country’s developmental landscape.",
                                "IIIT Dharwad now offers an M.Tech program in Data Science and Artificial Intelligence, delivered online with the same rigorous curriculum, comprehensive coverage, and learning outcomes as its on-campus counterpart."
                            ].map((text, index) => (
                                <motion.p
                                    key={index}
                                    className="transition-opacity duration-700"
                                    animate={visibleParagraphs[index] ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 1 }}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>

                        {/* Mobile view */}
                        <div className="block lg:hidden p-4">
                            <p className="text-justify mb-2">
                                Indian Institute of Information Technology, Dharwad (IIIT Dharwad), established in 2015 through a unique
                                Public-Private Partnership by the Ministry of Education, Government of India, in collaboration with the
                                Government of Karnataka and industry partner Keonics, offers world-class education aligned with evolving
                                industry requirements.
                            </p>

                            {showMore && (
                                <div className="space-y-2">
                                    {[1, 2, 3].map((index) => (
                                        <motion.p
                                            key={index}
                                            className="text-justify"
                                            animate={visibleParagraphs[index - 1] ? { opacity: 1 } : { opacity: 0 }}
                                            transition={{ duration: 1 }}
                                        >
                                            {[
                                                "IIIT Dharwad offers B.Tech degree program in Computer Science and Engineering, Electronics and Communication Engineering, and Data Science and Artificial Intelligence, along with M.Tech (Research) and Ph.D. degree program. The institute is committed to helping India maintain its global leadership in IT and allied domains.",
                                                "As an Institute of National Importance, IIIT Dharwad distinguishes itself by focusing on Application information technology to address socially relevant challenges in India. Its academic philosophy emphasizes creating technological innovations that are meaningful, contextual, and transformative for...",
                                                "IIIT Dharwad now offers an M.Tech program in Data Science and Artificial Intelligence, delivered online with the same rigorous curriculum, comprehensive coverage, and learning outcomes as its on-campus counterpart."
                                            ][index - 1]}
                                        </motion.p>
                                    ))}
                                </div>
                            )}

                            <div className="mt-2">
                                <button
                                    onClick={() => setShowMore(!showMore)}
                                    className="text-blue-600 font-medium text-base focus:outline-none"
                                >
                                    {showMore ? 'Read Less <<' : 'Read More >>'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
