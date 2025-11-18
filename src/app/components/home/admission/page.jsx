'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Steps from '../../../assets/home/admission/Steps.webp';

export default function Admission() {
    return (
        <section className="relative pb-20">
            <div className="container mx-auto px-4">
                <div className="relative z-10">

                    {/* Heading with animation */}
                    <motion.div
                        className="flex items-center justify-center gap-4 pb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
                            <span className="w-10 h-0.5 bg-[#041b39]" />
                            <span className="w-20 h-0.5 bg-[#041b39]" />
                        </div>

                        <h2 className="text-lg md:text-2xl font-bold text-gray-900 uppercase text-center">
                            ADMISSION PROCESS
                        </h2>

                        <div className="flex flex-col gap-1">
                            <span className="w-10 h-0.5 bg-[#041b39]" />
                            <span className="w-20 h-0.5 bg-[#041b39]" />
                        </div>
                    </motion.div>

                    {/* Desktop Image with delayed animation */}
                    <motion.div
                        className="hidden md:block text-center w-3/4 mx-auto"
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Image className="mx-auto" src={Steps} alt="Admission Steps" />
                    </motion.div>

                    {/* Mobile Steps with animation */}
                    <div className="bg-white py-4 md:hidden">
                        <div className="relative ml-10">
                            {/* vertical line */}
                            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-[#041b39] z-0" />

                            {[
                                "Fill the application form, add and pay the application fee",
                                // "Take the Online Entrance Test",
                                "Appear for an interview round",
                                "If selected, you will receive the offer letter",
                                "Pay the program fees and confirm your admission",
                            ].map((text, index) => (
                                <motion.div
                                    className="relative mb-10 pl-8"
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Circle */}
                                    <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-10">
                                        <div className="w-14 h-14 bg-[#041b39] text-white rounded-full flex flex-col items-center justify-center text-xs font-bold text-center leading-tight shadow-md">
                                            Step<br />{`0${index + 1}`}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="ml-2 text-black text-lg font-bold font-medium">
                                        {text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
