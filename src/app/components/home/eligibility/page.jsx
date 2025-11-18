"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import eligiblity from "../../../assets/home/eligiblity/eleBg.webp";

export default function Eligibility() {
  const listItems = [
    "Candidates must be B.E./B.Tech/M.Sc/MCA graduates.",
    "Should have at least <b>one year of work experience.</b>",
    "Students with minimum CGPA/CPI of 6.5 for General/OBC and 6.0 for SC/ST/PwD category students on a scale of 10, or 60% for General/OBC and 55% for SC/ST/PwD category students in aggregate can apply.",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-12" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={eligiblity}
          alt="Eligibility Background"
          fill
          className="object-cover w-full h-full"
          placeholder="blur"
          quality={100}
        />
        <div className="absolute inset-0 bg-[#041b39]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-white max-w-7xl">
        {/* Heading Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-6 relative"
        >
          <h2 className="text-xl md:text-2xl font-bold uppercase inline-block text-left">
            Eligibility Criteria
          </h2>
          <span className="absolute right-[-10] top-1/2 -translate-y-1/2 w-8 h-0.5 bg-white ml-2" />
          <span className="absolute right-[10] top-[calc(50%+7px)] w-20 h-0.5 bg-white ml-2" />
        </motion.div>

        {/* List Animation */}
        <div className="max-w-6xl text-sm sm:text-lg leading-relaxed text-start text-white">
          <ul className="list-disc ">
            {listItems.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.3 }}
                className={` ${
                  idx < 2 ? "border-b border-white pb-1" : ""
                }`}
                dangerouslySetInnerHTML={{__html:item}}
              >
                
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
