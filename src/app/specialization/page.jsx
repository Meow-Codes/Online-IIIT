'use client'
import Footer from '../components/home/footer/page'
import background from '../assets/specilization/currBg.webp'
import Elective from '../components/specialization/elective/elective'
import logo from '../assets/home/header/iiit-Logos.svg'
import Image from 'next/image';


export default function SpecializationPage() {
    return (
        <div>
            <header id="header" className="w-full relative z-50">
                <div className="w-full bg-white shadow py-2">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="py-2">
                            <div className="flex items-center justify-between">
                                <div className="w-1/6">
                                    <div className="logo">
                                        <a href="/">
                                            <Image
                                                className="max-w-full h-auto"
                                                src={logo}
                                                alt="IIIT Logo"
                                                width={200}
                                                height={50}
                                            />
                                        </a>
                                    </div>
                                </div>
                                <div className="w-5/6 text-right">
                                    <a href="tel:+919240013641" className="font-bold p-2 rounded-full bg-gray-200 inline-flex items-center">
                                        <span className="bg-white text-[#003066] border border-[#003066] flex items-center justify-center rounded-full h-8 w-8">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="#003066"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                aria-hidden="true"
                                            >
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.38 2.39.73 3.52a2 2 0 01-.45 2.11L9.91 10.09a16 16 0 006 6l1.75-1.75a2 2 0 012.11-.45c1.13.35 2.31.6 3.52.73a2 2 0 012 2z" />
                                            </svg>
                                        </span>
                                        <span className="px-3 py-1">+91-9240013641</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section
                className="relative flex items-center justify-center bg-cover bg-right md:bg-center py-16 h-[120px] md:h-[250px] mb-12"
                style={{ backgroundImage: `url(${background.src})` }}
            >
                <div className="container px-4 max-w-7xl">
                    <div className="text-start relative z-10">
                        <h1 className="text-white font-bold text-2xl md:text-3xl">
                            Curriculum, Specialization & Electives
                        </h1>
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title with Left Accent Bar */}
                    <div className="flex items-center mb-6">
                        <div className="w-3 h-10 bg-blue-200 mr-2"></div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Curriculum</h2>
                    </div>

                    {/* Semester Table */}
                    <div className="overflow-x-auto mb-10">
                        <table className="min-w-full  m-auto border-4 border-separate border-spacing-1.5 border-white">
                            <thead>
                                <tr className="bg-[#041b39] text-white text-left">
                                    <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Semester I</th>
                                    <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Semester II</th>
                                    <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Semester III</th>
                                    <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Semester IV</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-900">
                                {[
                                    ["Applied Mathematics for Data Science and AI", "AI Systems Lab", "Project-III", "Project-IV"],
                                    ["Machine Learning Paradigms", "Research Survey and Seminar", "Electives (1/2/3/4 credits)", "Electives (1/2/3 credits)"],
                                    ["Data Science Lab", "Electives (1/2/3/4 credits)", "", ""],
                                    ["Elective", "Project-II", "", ""],
                                    ["Introduction to Research", "", "", ""],
                                    ["Project-I", "", "", ""]
                                ].map((row, i) => (
                                    <tr key={i} className={i % 2 ? "bg-[#e3e3e5]" : "bg-[#f3f4f6]"}>
                                        {row.map((cell, j) => (
                                            <td key={j} className="px-4 py-5 text-sm md:text-md text-center">{cell}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Core Course Sections */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Discipline Core Courses */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-10 bg-blue-200 mr-2"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Discipline core courses</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <h4 className="bg-[#041b39] text-xl md:text-2xl font-bold text-white text-center p-3">Discipline core courses</h4>
                                <table className="min-w-full border-separate border-spacing-1.5 border-white">
                                    <thead className="bg-[#041b39] text-white text-left">
                                        <tr>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Sl. No.</th>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Courses</th>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Credits</th>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Sem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["1", "Applied Mathematics for Data Science and AI", "3", "I"],
                                            ["2", "Machine Learning Paradigms", "3", "I"],
                                            ["3", "Data Science Lab", "2", "I"],
                                            ["4", "AI Systems Lab", "2", "II"]
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 ? "bg-[#e3e3e5]" : "bg-[#f3f4f6]"}>
                                                {row.map((cell, j) => (
                                                    <td key={j} className="px-4 py-5 text-sm md:text-md text-center">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                        <tr className="bg-[#9dc2e0] text-black ">
                                            <td className="p-2 md:p-5 text-sm md:text-md text-center"></td>
                                            <td className="p-2 md:p-5 text-sm md:text-md text-center">Total Credit</td>
                                            <td className="p-2 md:p-5 text-sm md:text-md text-center">10</td>
                                            <td className="p-2 md:p-5 text-sm md:text-md text-center"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Master's Core Courses */}
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-3 h-10 bg-blue-200 mr-2"></div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Master's core courses</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <h4 className="bg-[#041b39] text-xl md:text-2xl font-bold text-white text-center p-3">Master's core courses</h4>

                                <table className="min-w-full border-separate border-spacing-1.5 border-white">
                                    <thead className="bg-[#041b39] text-white text-left">
                                        <tr>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Sl. No.</th>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Courses</th>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Credits</th>
                                            <th className="p-2 md:p-5 text-lg md:text-xl font-bold text-center text-blue-200">Sem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ["1", "Introduction to Research", "2", "I"],
                                            ["2", "Research Survey and Seminar", "3", "II"]
                                        ].map((row, i) => (
                                            <tr key={i} className={i % 2 ? "bg-[#e3e3e5]" : "bg-[#f3f4f6]"}>
                                                {row.map((cell, j) => (
                                                    <td key={j} className="p-2 md:p-5 text-sm md:text-md  text-center">{cell}</td>
                                                ))}
                                            </tr>
                                        ))}
                                        <tr className="bg-[#9dc2e0] text-black ">
                                            <td className="p-2 md:p-5 text-sm md:text-md text-md text-center"></td>
                                            <td className="p-2 md:p-5 text-sm md:text-md text-md text-center">Total Credit</td>
                                            <td className="p-2 md:p-5 text-sm md:text-md text-md text-center">5</td>
                                            <td className="p-2 md:p-5 text-sm md:text-md text-md text-center"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Elective />
            </div>
            <Footer />
        </div>
    );
}