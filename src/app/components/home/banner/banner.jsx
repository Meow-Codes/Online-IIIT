"use client";
import backgroundbanner from "../../../assets/home/banner/banner.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Banner() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-05-31T00:00:00");

    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    const interval = setInterval(updateTimer, 1000);

    const timeout = setTimeout(() => {
      setShowText(true); // show text after delay
    }, 300); // wait 300ms

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  return (
    <div id="home">
      <section className="relative overflow-hidden">
        <div
          className="relative bg-cover bg-center h-[650px] lg:h-[800px] py-[2rem] lg:py-[3rem]" // Set fixed height here
          style={{ backgroundImage: `url(${backgroundbanner.src})` }}
        >
          <div className="container mx-auto px-4 max-w-7xl m-auto">
            <div className="relative z-10 max-w-4xl">
              {showText && (
                <motion.div
                  initial={{ opacity: 0, transform: "scale(0.95)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 pt-[5rem] lg:pt-[8rem]"
                >
                  <motion.p
                                        initial={{ opacity: 0, transform: "translateY(20px)" }}
                                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        className="text-white text-lg lg:text-2xl leading-snug mb-2"
                                    >
                                        <span>Admissions Closing Soon
                                        </span>
                                        <span className="text-red-400 text-2xl pl-4 font-extrabold">Limited Seats</span>
                                    </motion.p>

                  {/* <motion.div
                                        initial={{ opacity: 0, transform: "translateY(20px)" }}
                                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        className="flex justify-start gap-4 bg-transparent p-0 mb-2"
                                    >
                                        {Object.entries(timeLeft).map(([key, value]) => (
                                            <motion.div
                                                key={key}
                                                initial={{ opacity: 0, transform: "translateY(10px)" }}
                                                animate={{ opacity: 1, transform: "translateY(0px)" }}
                                                transition={{ duration: 0.3, delay: 0.3 }}
                                                className="bg-yellow-400 text-black text-center px-2 py-1 rounded-md border border-gray-300 w-[68px] flex flex-col justify-center shadow-inner shadow-md"
                                            >
                                                <span id={key} className="text-xl font-bold">
                                                    {value}
                                                </span>
                                                <small className="opacity-70 capitalize font-semibold text-sm">
                                                    {key}
                                                </small>
                                            </motion.div>
                                        ))}
                                    </motion.div> */}

                  <motion.h1
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="lg:hidden text-white text-3xl lg:text-5xl font-extrabold leading-tight mb-4"
                  >
                    M.Tech in Data Science &amp; Artificial Intelligence
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="hidden lg:block text-white text-3xl lg:text-5xl font-extrabold leading-tight mb-4"
                  >
                    M.Tech in Data Science &amp; <br /> Artificial Intelligence
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="text-white text-base lg:text-lg mb-2"
                  >
                    <span className="text-yellow-400 font-semibold">
                      2 Year Degree
                    </span>{" "}
                    with Multiple Exit Options <br />
                    <span className="text-sm italic">
                      Eligibility: <br />- Candidates must be
                      B.E./B.Tech/M.Sc/MCA graduates.
                      <br />- Should have at least{" "}
                      <b>one year of work experience.</b>
                    </span>
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="text-white text-xl font-medium mt-4"
                  >
                    Batch starts on{" "}
                    <span className="text-yellow-400 font-extrabold">
                      13<sup>th</sup> Oct '2025
                    </span>
                  </motion.p>

                  {/* Duration / Mode Box */}
                  <motion.div
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="w-[14rem] my-6 space-y-4"
                  >
                    <div className="flex items-center border border-white rounded text-white">
                      <strong className="w-[7rem] px-4 py-4 bg-white text-black text-sm">
                        Duration
                      </strong>
                      <strong className="w-[7rem] px-4 py-2">2 Years</strong>
                    </div>

                    <div className="flex items-center border border-white rounded text-white">
                      <strong className="w-[7rem] px-4 py-4 bg-white text-black text-sm">
                        Mode
                      </strong>
                      <strong className="w-[7rem] px-4 py-2">Online</strong>
                    </div>
                  </motion.div>

                  {/* Enquiry Button */}
                  <motion.div
                    initial={{ opacity: 0, transform: "translateY(20px)" }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="mt-6"
                  >
                    <a
                      href="/dsai"
                      className="relative inline-block w-[15rem] text-center px-6 py-4 rounded-full text-sm sm:text-base font-semibold text-[#041b39] bg-white border border-[#1e3a8a] overflow-hidden group transition-colors duration-500"
                    >
                      <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                        ENQUIRE NOW
                      </span>
                      <span className="absolute left-1/2 top-0 h-full w-0 bg-[#041b39] group-hover:w-full transition-all duration-500 -translate-x-1/2 z-0 rounded-full"></span>
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
