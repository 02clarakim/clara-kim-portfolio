"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function Hero() {
  const lines = ["Hello,", "I'm Clara Kim!"];
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      setShowArrow(window.scrollY < window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(8px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.7; }
        }

        .hero-letter {
          opacity: 0;
          display: inline-block;
          transform: translateY(20px);
          margin-right: 2px;
          animation: fadeUp 0.6s forwards ease-out;
        }

        .hero-photo {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s forwards ease-out;
        }

        .scroll-arrow {
          animation: bounce 1.6s infinite ease-in-out;
        }
      `}</style>

      <section
        id="home"
        className="min-h-screen flex items-center box-border max-md:min-h-[calc(100svh-56px)] max-md:py-[50px] max-md:text-center"
      >
        <div className="max-w-[855px] max-md:w-full">
          {/* Mobile only: the desktop sidebar already shows the photo */}
          <div className="hero-photo md:hidden relative w-[168px] h-[168px] mx-auto mb-8">
            <Image
              src="/assets/images/my-photo.jpeg"
              alt="Clara Kim"
              width={168}
              height={168}
              priority
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
            <Image
              src="/assets/images/berkeley-img.png"
              alt="UC Berkeley"
              width={50}
              height={50}
              className="absolute -top-0.5 -right-0.5 w-[50px] h-[50px] rounded-full object-contain bg-white shadow-md"
            />
          </div>

          <h1 className="text-[clamp(44px,calc((100vw-450px)/7.2),85px)] font-semibold leading-[1.1] text-black m-0 mb-5 text-left inline-block max-md:text-[48px] max-md:text-center">
            {lines.map((line, lineIndex) => (
              <div key={lineIndex} className="block whitespace-pre">
                {line.split("").map((char, i) => (
                  <span
                    key={i}
                    className="hero-letter"
                    style={{
                      animationDelay: `${(lineIndex * line.length + i) * 0.05}s`,
                    }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            ))}
          </h1>

          <p className="text-[clamp(24px,calc((100vw-450px)/15),40px)] font-normal text-[#858585] pt-5 m-0 text-left max-md:text-2xl max-md:text-center">
            I build products from the database to the details people notice.
          </p>

          {showArrow && (
            <div
              className="scroll-arrow fixed bottom-[100px] left-[calc(50%+175px)] -translate-x-1/2 cursor-pointer flex justify-center text-gray-400 opacity-80 hover:opacity-100 transition-opacity"
              onClick={scrollToAbout}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Hero;