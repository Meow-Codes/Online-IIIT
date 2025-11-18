'use client';
import { motion } from 'framer-motion';

export default function Programfees() {
    return (
        <div className="">
            <section className="relative py-6 bg-[#041b39]">
                <div className="container mx-auto px-4 max-w-7xl m-auto">

                    {/* Heading with animation */}
                    <motion.div
                        className="flex items-center justify-center gap-4 py-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        {/* Left Bars */}
                        <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
                            <span className="w-10 h-0.5 bg-white" />
                            <span className="w-20 h-0.5 bg-white" />
                        </div>

                        {/* Heading */}
                        <h2 className="text-lg md:text-2xl font-bold text-white uppercase text-center">
                            PROGRAM FEES
                        </h2>

                        {/* Right Bars */}
                        <div className="flex flex-col gap-1">
                            <span className="w-10 h-0.5 bg-white" />
                            <span className="w-20 h-0.5 bg-white" />
                        </div>
                    </motion.div>

                    {/* Table with delayed animation */}
                    <motion.div
                        className="max-w-5xl mx-auto overflow-x-auto"
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <table className="w-full border border-white text-center text-white">
                            <thead>
                                <tr className="bg-white text-[#041b39] font-semibold">
                                    <th colSpan={3} className="p-4 text-lg border border-white">
                                        Fee Structure
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-[#041b39]">
                                    <td className="p-4 border border-white">Semester Fee - INR 88,500</td>
                                    <td className="p-4 border border-white">Year Fee - INR 1,77,000</td>
                                    <td className="p-4 border border-white">Total Fee - INR 3,54,000</td>
                                </tr>
                                <tr className="bg-[#041b39]">
                                    <td colSpan={3} className="p-4 border border-white">
                                        <div>Application Fee - INR 2,000</div>
                                        <div>EMI Starting INR 15,400/-</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
