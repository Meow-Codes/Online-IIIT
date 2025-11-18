import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image"; // Import the Image component

const specializationsData = [
  {
    title: "NLP and Speech",
    details: [
      "Natural Language Processing",
      "Information Retrieval",
      "Conversational Al",
      "Social Media Analytics",
      "Speech Recognition Systems",
      "Speech Synthesis",
      "Spoken Language Understanding",
      "Speaker Identification and Verification",
    ],
    bgColor: "bg-[#041b39] text-white",
    titleColor: "text-white",
    detailTextColor: "text-white",
    borderColor: "border-white",
  },
  {
    title: "Computer Vision",
    details: [
      "Fundamentals of Computer Vision",
      "Object Detection and Recognition",
      "3D Vision and Geometry",
      "Vision for Autonomous Systems",
      "eep Learning for Vision",
    ],
    bgColor: "bg-[#ECECEC]",
    titleColor: "text-back",
    detailTextColor: "text-gray-700",
    borderColor: "border-gray-400",
  },
  {
    title: "Generative AI",
    details: [
      "Advanced Deep Learning",
      "Generative AI",
      "Deep Speech Processing",
      "Large Language Models",
      "Text and Speech Generation with Advanced Models",
      "Visual Creativity with Generative AI",
    ],
    bgColor: "bg-[#041b39] text-white",
    titleColor: "text-white",
    detailTextColor: "text-white",
    borderColor: "border-white",
  },
  {
    title: "Financial Analytics",
    details: [
      "Financial Data Analytics",
      "Numerical Methods in Finance",
      "Computational Financial Modeling",
      "Applied Econometrics",
    ],
    bgColor: "bg-[#ECECEC]",
    titleColor: "text-black",
    detailTextColor: "text-gray-700",
    borderColor: "border-gray-400",
  },
  {
    title: "AI in Healthcare",
    details: [
      "Bioinformatics",
      "Healthcare Data Analytics",
      "Computational Biology",
      "Biomedical Signal and Image processing",
      "Statistics for Health Technology",
    ],
    bgColor: "bg-[#041b39] text-white",
    titleColor: "text-white",
    detailTextColor: "text-white",
    borderColor: "border-white",
  },
];

const Elective = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current && swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      prevRef.current.addEventListener("click", () => {
        swiperInstance.slidePrev();
      });

      nextRef.current.addEventListener("click", () => {
        swiperInstance.slideNext();
      });

      swiperInstance.on("slideChange", () => {
        if (swiperInstance.isBeginning) {
          prevRef.current.classList.add("swiper-button-disabled");
        } else {
          prevRef.current.classList.remove("swiper-button-disabled");
        }

        if (swiperInstance.isEnd) {
          nextRef.current.classList.add("swiper-button-disabled");
        } else {
          nextRef.current.classList.remove("swiper-button-disabled");
        }
      });
    }
  }, []);

  return (
    <div className="relative py-10 w-full mx-auto max-w-7xl flex items-center justify-between px-6">
      <div
        ref={prevRef}
        className="absolute left-0 md:left-[-15px] top-1/2 transform -translate-y-1/2 bg-[#e0e0e0] text-[#041b39] w-10 h-16 flex items-center justify-center z-10 cursor-pointer"
        aria-label="Previous slide"
        tabIndex={0}
      >
        <FiChevronLeft size={24} />
      </div>
      <div className="w-full">
        <div className="flex justify-start">
          <div className="flex items-center mb-6">
            <div className="w-3 h-10 bg-blue-200 mr-2"></div>
            <h2 className="text-2xl font-bold text-gray-900">Elective list</h2>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          spaceBetween={0}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y]}
        >
          {specializationsData.map((specialization, index) => (
            <SwiperSlide key={index}>
              <div
                className={`shadow-md overflow-hidden h-[500px] ${specialization.bgColor}`}
              >
                <div
                  className={`p-4 flex items-center space-x-3 mx-5 border-b-2 ${specialization.borderColor}`}
                >
                  {specialization.icon && (
                    <div className="text-xl relative w-10 h-12">
                      <Image
                        src={specialization.icon}
                        alt={specialization.title}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                  )}
                  <h3
                    className={`text-2xl font-semibold ${specialization.titleColor}`}
                  >
                    {specialization.title}
                  </h3>
                </div>
                <ul className="py-4 px-5">
                  {specialization.details &&
                    specialization.details.map(
                      (detail, detailIndex, detailsArray) => (
                        <li
                          key={detailIndex}
                          className={`py-3 ${
                            specialization.detailTextColor
                          } flex items-center ${
                            detailIndex < detailsArray.length - 1
                              ? `border-b ${specialization.borderColor}`
                              : ""
                          } leading-relaxed text-md`} // Added leading-relaxed here
                        >
                          <svg
                            className="w-4 h-4 inline mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                          {detail}
                        </li>
                      )
                    )}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div
        ref={nextRef}
        className="absolute right-0 md:right-[-15px] top-1/2 transform -translate-y-1/2 bg-[#e0e0e0] text-[#041b39] w-10 h-16 flex items-center justify-center z-10 cursor-pointer"
        aria-label="Next slide"
        tabIndex={0}
      >
        <FiChevronRight size={24} />
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db; /* Light gray for inactive dots */
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #041b39; /* Blue for active dot */
          width: 30px;
          height: 10px;
        }
        /* Hide default Swiper navigation buttons */
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
        /* Style for disabled custom navigation buttons */
        .swiper-button-disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default Elective;
