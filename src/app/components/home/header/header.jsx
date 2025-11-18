// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import logo from '../../../assets/home/header/iiit-Logos.svg';
// import sidebar from '../../../assets/home/header/bars.svg';


// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   useEffect(() => {
//     const header = document.getElementById('header');

//     const handleScroll = () => {
//       if (!header) return;

//       const headerRect = header.getBoundingClientRect();
//       const currentScrollPos = window.scrollY;

//       // Check if the header is fully visible at the top of the page
//       if (headerRect.top === 0 && currentScrollPos > prevScrollPos && !isAnimating) {
//         // Trigger animation only when scrolling down from the header
//         setIsAnimating(true);

//         // Reset animation state after animation completes
//         setTimeout(() => {
//           setIsAnimating(false);
//         }, 2000); // Match this with the animation duration
//       }

//       // Update previous scroll position
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollPos, isAnimating]);

//   const handleNavClick = (sectionId) => {
//     setIsMenuOpen(false); // Close the mobile menu

//     // Delay scrolling slightly to let menu close animation finish
//     setTimeout(() => {
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//       }
//     }, 100); // Optional delay
//   };

//   return (
//     <header
//       id="header"
//       className={`fixed top-0 w-full bg-white shadow-lg z-50 ${isAnimating ? 'animate-header-slide-in' : ''
//         }`}
//       data-scroll-index="0"
//       style={{
//         // Define the animation via inline styles
//         '--header-animation-duration': '1s',
//         animationDuration: 'var(--header-animation-duration)',
//       }}
//     >
//       <style jsx>{`
//         @keyframes headerSlideIn {
//           0% { 
//             transform: translateY(-100%);
//             opacity: 0;
//           }
//           100% { 
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         .animate-header-slide-in {
//           animation: headerSlideIn var(--header-animation-duration) ease-out;
//         }
//       `}</style>

//       <div className="max-w-7xl m-auto">
//         <div className="relative w-full">
//           <nav className="flex items-center justify-between flex-wrap px-4 py-3 mx-auto">
//             {/* Logo */}
//             <a href="/" className="py-0">
//               <Image
//                 src={logo}
//                 alt="IIIT Logo"
//                 className="mx-8 lg:mx-0 w-[180px] lg:w-[65%]"
//               />
//             </a>

//             {/* Hamburger Menu Button - visible only on mobile */}
//             <button
//               type="button"
//               className="block lg:hidden text-gray-700 focus:outline-none"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <Image src={sidebar} alt="Menu" className="w-10 h-10" />
//             </button>

//             {/* Navigation Links */}
//             <div
//               className={`overflow-hidden transition-all duration-1000 ease-in-out hidden lg:block
//                 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
//                 lg:max-h-none lg:opacity-100 lg:flex lg:items-center lg:w-auto w-full`}
//             >
//               <div className="flex flex-col lg:flex-row lg:ml-auto gap-0 mt-4 lg:mt-0 w-full lg:w-auto">
//                 <a href="#home" className="font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-3 lg:text-center lg:border-[#041b39] transition-colors duration-300">Home</a>
//                 <a href="#about" className="font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-3 lg:text-center lg:border-[#041b39] transition-colors duration-300">About us</a>
//                 <a href="#specialization" className="font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-3 lg:text-center lg:border-[#041b39] transition-colors duration-300">Specialization</a>
//                 <a href="#contact" className="font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:text-center lg:border-[#041b39] transition-colors duration-300">Contact us</a>
//               </div>
//             </div>
//           </nav>

//           {/* Mobile Navigation Links */}
//           <div
//             className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
//               ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
//             `}
//           >
//             <div className="flex flex-col w-full mt-4 px-4">
//               <button  onClick={() => handleNavClick('home')} className="font-bold text-lg px-4 py-2 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-2 lg:text-center lg:border-[#041b39]">
//                 Home
//               </button>
//               <button onClick={() => handleNavClick('about')} className="font-bold text-lg px-4 py-2 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-2 lg:text-center lg:border-[#041b39]">
//                 About us
//               </button>
//               <button onClick={() => handleNavClick('specialization')} className="font-bold text-lg px-4 py-2 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-2 lg:text-center lg:border-[#041b39]">
//                 Specialization
//               </button>
//               <button onClick={() => handleNavClick('contact')} className="font-bold text-lg px-4 py-2 text-left lg:border-b-0 lg:text-center">
//                 Contact us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../assets/home/header/iiit-Logos.svg';
import sidebar from '../../../assets/home/header/bars.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const header = document.getElementById('header');

    const handleScroll = () => {
      if (!header) return;

      const headerRect = header.getBoundingClientRect();
      const currentScrollPos = window.scrollY;

      if (headerRect.top === 0 && currentScrollPos > prevScrollPos && !isAnimating) {
        setIsAnimating(true)
        setTimeout(() => {
          setIsAnimating(false);
        }, 2000);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isAnimating]);

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 w-full bg-white shadow-lg z-50 ${isAnimating ? 'animate-header-slide-in' : ''
        }`}
      data-scroll-index="0"
      style={{
        '--header-animation-duration': '1s',
        animationDuration: 'var(--header-animation-duration)',
      }}
    >
      <style jsx>{`
        @keyframes headerSlideIn {
          0% { 
            transform: translateY(-100%);
            opacity: 0;
          }
          100% { 
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-header-slide-in {
          animation: headerSlideIn var(--header-animation-duration) ease-out;
        }

        .nav-link {
          position: relative;
          color: #041b39;
          transition: color 0.3s ease;
        }

        .nav-link::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translateX(-50%);
        height: 2px;
        width: 0%;
        background-color: #041b39;
        transition: width 0.3s ease;
     }

    .nav-link:hover::after {
    width: 70%; /* You can adjust the % as needed */
     }
      `}</style>

      <div className="max-w-7xl m-auto">
        <div className="relative w-full">
          <nav className="flex items-center justify-between flex-wrap px-4 py-3 mx-auto">
            <a href="/" className="py-0">
              <Image
                src={logo}
                alt="IIIT Logo"
                className="mx-8 lg:mx-0 w-[180px] lg:w-[65%]"
              />
            </a>

            <button
              type="button"
              className="block lg:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Image src={sidebar} alt="Menu" className="w-10 h-10" />
            </button>

            <div
              className={`overflow-hidden transition-all duration-1000 ease-in-out hidden lg:block
                ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                lg:max-h-none lg:opacity-100 lg:flex lg:items-center lg:w-auto w-full`}
            >
              <div className="flex flex-col lg:flex-row lg:ml-auto gap-0 mt-4 lg:mt-0 w-full lg:w-auto">
                <a href="#home" className="nav-link font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-3 lg:text-center lg:border-[#041b39] transition-colors duration-300">Home</a>
                <a href="#about" className="nav-link font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-3 lg:text-center lg:border-[#041b39] transition-colors duration-300">About us</a>
                <a href="#specialization" className="nav-link font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-3 lg:text-center lg:border-[#041b39] transition-colors duration-300">Specialization</a>
                <a href="#contact" className="nav-link font-bold text-lg px-4 py-4 sm:py-0 border-b border-[#041b39] text-left lg:border-b-0 lg:text-center lg:border-[#041b39] transition-colors duration-300">Contact us</a>
              </div>
            </div>
          </nav>

          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
              ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="flex flex-col w-full mt-4 px-4">
              <button onClick={() => handleNavClick('home')} className="font-bold text-lg px-4 py-2 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-2 lg:text-center lg:border-[#041b39]">
                Home
              </button>
              <button onClick={() => handleNavClick('about')} className="font-bold text-lg px-4 py-2 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-2 lg:text-center lg:border-[#041b39]">
                About us
              </button>
              <button onClick={() => handleNavClick('specialization')} className="font-bold text-lg px-4 py-2 border-b border-[#041b39] text-left lg:border-b-0 lg:border-r-2 lg:text-center lg:border-[#041b39]">
                Specialization
              </button>
              <button onClick={() => handleNavClick('contact')} className="font-bold text-lg px-4 py-2 text-left lg:border-b-0 lg:text-center">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
