"use client";
import abdul from "../../../assets/dsai/AbdulW.webp";
import animesh from "../../../assets/dsai/Animesh.webp";
import chinmayanda from "../../../assets/dsai/Chinmayananda.webp";
import deepak from "../../../assets/dsai/DeepakKt.webp";
import Dibyajyoti from "../../../assets/dsai/Dibyajyoti.webp";
import girish from "../../../assets/dsai/GirishGN.webp";
import Krishnendu from "../../../assets/dsai/Krishnendu.webp";
import manjunath from "../../../assets/dsai/ManjunathK.webp";
import natraj from "../../../assets/dsai/Nataraj.webp";
import Prabhu from "../../../assets/dsai/Prabhu.webp";
import RameshA from "../../../assets/dsai/RameshA.webp";
import Shirshendu from "../../../assets/dsai/Shirshendu.webp";
import Siddharth from "../../../assets/dsai/Siddharth.webp";
import Utkarsh from "../../../assets/dsai/Utkarsh.webp";
import Sibasankar from "../../../assets/dsai/Sibasankar.webp";
import sunils from "../../../assets/dsai/SunilS.webp";
import Sunilpv from "../../../assets/dsai/Sunilpv.webp";
import sunilck from "../../../assets/dsai/sunilck.webp";
import samahadeva from "../../../assets/dsai/srmahadeva.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const slideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const buttonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

export default function Facultydsai() {
    const facultyList = [
        {
            name: "Prof. S R Mahadeva Prasanna",
            title: "Professor and Director",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (IIT Madras)",
            image: samahadeva,
        },
        {
            name: "Dr. Girish GN",
            title: "Assistant Professor",
            field: "Computer Science & Engineering",
            degree: "Ph.D. (NITK Surathkal)",
            image: girish,
        },
        {
            name: "Dr. Chinmayananda A",
            title: "Assistant Professor",
            field: "Electronics and Communication Engineering",
            degree: "Ph.D. (IISc Bengaluru)",
            image: chinmayanda,
        },
        {
            name: "Dr. Manjunath K V",
            title: "Assistant Professor",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (NITK Surathkal)",
            image: manjunath,
        },
        {
            name: "Dr. Deepak K T",
            title: "Assistant Professor",
            field: "Electronics and Communication Engineering",
            degree: "Ph.D. (IIT Guwahati)",
            image: deepak,
        },
        {
            name: "Dr. Dibyajyoti Guha",
            title: "Assistant Professor",
            field: "Computer Science & Engineering",
            degree: "Ph.D. (IIT Bhubaneswar)",
            image: Dibyajyoti,
        },
        {
            name: "Dr. Abdul Wahid",
            title: "Assistant Professor",
            field: "Computer Science & Engineering",
            degree: "Ph.D. (IIT Dhanbad)",
            image: abdul,
        },
        {
            name: "Dr. Sunil C K",
            title: "Assistant Professor",
            field: "Computer Science & Engineering",
            degree: "Ph.D. (NITK Surathkal)",
            image: sunilck,
        },
        {
            name: "Dr. Krishnendu Ghosh",
            title: "Assistant Professor",
            field: "Computer Science & Engineering",
            degree: "Ph.D. (IIT Kharagpur)",
            image: Krishnendu,
        },
        {
            name: "Dr. Sunil Kumar P V",
            title: "Assistant Professor",
            field: "Computer Science & Engineering",
            degree: "Ph.D. (NIT, Calicut)",
            image: Sunilpv,
        },
        {
            name: "Dr. Sunil Saumya",
            title: "Assistant Professor",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (NIT Patna)",
            image: sunils,
        },
        {
            name: "Dr. Prabhu Prasad B M",
            title: "Assistant Professor",
            field: "Computer Science & Engineering",
            degree: "Ph.D. (NITK Surathkal)",
            image: Prabhu,
        },
        {
            name: "Dr. Animesh Chaturvedi",
            title: "Assistant Professor",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (IIT Indore)",
            image: animesh,
        },
        {
            name: "Dr. Ramesh Athe",
            title: "Assistant Professor",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (Osmania University, Hyderabad)",
            image: RameshA,
        },
        {
            name: "Dr. Shirshendu Layek",
            title: "Assistant Professor",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (IIT Dhanbad)",
            image: Shirshendu,
        },
        {
            name: "Dr. Siddharth R",
            title: "Assistant Professor",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (NIT Puducherry)",
            image: Siddharth,
        },
        {
            name: "Dr. Utkarsh Khaire",
            title: "Assistant Professor",
            field: "Data Science and Artificial Intelligence",
            degree: "Ph.D. (NIT Nagaland)",
            image: Utkarsh,
        },
        {
            name: "Dr. Nataraj K S",
            title: "Assistant Professor",
            field: "Electronics and Communication Engineering",
            degree: "Ph.D. (IIT Bombay)",
            image: natraj,
        },
        {
            name: "Dr. Sibasankar Padhy",
            title: "Assistant Professor",
            field: "Electronics and Communication Engineering",
            degree: "Ph.D. (IIT Guwahati)",
            image: Sibasankar,
        },
    ];

    const swiperRef = useRef(null);

    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      .swiper-pagination-bullet {
        background: #d9d9d9;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        opacity: 1;
        margin: 0 4px;
        transition: all 0.3s ease;
        display: inline-block;
      }

      .swiper-pagination-bullet-active {
        background: #0f172a;
        width: 30px;
        height: 10px;
        border-radius: 30px;
      }

      .swiper-pagination-custom {
        display: flex !important;
        justify-content: center !important;
        gap: 8px !important;
        width: 100% !important;
        margin-top: 20px !important;
        position: relative !important;
        z-index: 10 !important;
      }

      @media (max-width: 767px) {
        .swiper-pagination-custom {
          position: relative !important;
          bottom: 0 !important;
          display: flex !important;
          justify-content: center !important;
          width: 100% !important;
          padding: 10px 0 !important;
        }
      }
    `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <motion.div
            className="max-w-7xl mx-auto px-4 w-full pt-[10rem] lg:pt-[4rem] xl:pt-[10rem] 2xl:pt-[16rem] "
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <section className="py-12 bg-white relative">
                <div className="flex items-center justify-center gap-4 pb-8">
                    <div className="w-24 flex-shrink-0 flex flex-col gap-1 items-end">
                        <span className="w-10 h-0.5 bg-[#041b39]" />
                        <span className="w-20 h-0.5 bg-[#041b39]" />
                    </div>
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900 uppercase text-center">
                        MEET THE PROGRAM FACULTY
                    </h2>
                    <div className="flex flex-col gap-1">
                        <span className="w-10 h-0.5 bg-[#041b39]" />
                        <span className="w-20 h-0.5 bg-[#041b39]" />
                    </div>
                </div>
                <div className="relative">
                    <motion.button
                        onClick={goPrev}
                        className="swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-[-10px] md:left-[-20px] cursor-pointer z-10"
                        variants={buttonVariants}
                    >
                        <FiChevronLeft
                            size={35}
                            className="text-[#0F172A] bg-gray-300 p-1.5"
                        />
                    </motion.button>
                    <Swiper
                        ref={swiperRef}
                        modules={[Pagination, A11y]}
                        pagination={{
                            clickable: true,
                            el: ".swiper-pagination-custom",
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '"></span>';
                            }
                        }}
                        loop
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="!overflow-hidden"
                    >
                        {facultyList.map((faculty, idx) => (
                            <SwiperSlide key={idx}>
                                <motion.div
                                    className="p-4 border rounded-lg shadow text-center bg-white flex flex-col mx-auto items-center w-[18rem] md:w-[290px] h-[340px] hover:bg-[#041b39] text-black hover:text-white mt-1 md:mt-0"
                                    variants={slideVariants}
                                >
                                    <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden mb-3 border border-gray-200 bg-[#D0D1D3]">
                                        <Image
                                            src={faculty.image}
                                            alt={faculty.name}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <h6 className="text-sm md:text-lg font-semibold mb-1">
                                        {faculty.name}
                                    </h6>
                                    <p className="text-xs md:text-sm">{faculty.title}</p>
                                    <strong className="block text-xs md:text-sm my-1">
                                        {faculty.field}
                                    </strong>
                                    <p className="text-xs md:text-sm">{faculty.degree}</p>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <motion.button
                        onClick={goNext}
                        className="swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-[-10px] md:right-[-15px] cursor-pointer z-10"
                        variants={buttonVariants}
                    >
                        <FiChevronRight
                            size={35}
                            className="text-[#0F172A] bg-gray-300 p-1.5"
                        />
                    </motion.button>
                </div>

                <div className="swiper-pagination-custom flex justify-center mt-6 gap-4" />

                <style jsx>{`
          .swiper-button-prev-custom,
          .swiper-button-next-custom {
            display: flex;
            align-items: center;
            justify-content: center;
            background: none;
            border: none;
            padding: 0;
            margin: 0;
            outline: none;
          }

          @media (max-width: 767px) {
            .swiper-button-prev-custom {
              left: 10px;
            }
            .swiper-button-next-custom {
              right: 10px;
            }
          }
        `}</style>
            </section>
        </motion.div>
    );
}