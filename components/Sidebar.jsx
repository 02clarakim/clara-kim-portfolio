"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  House,
  UserRound,
  FolderOpen,
  ChevronRight,
  PanelLeftOpen,
  PanelLeftClose,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: UserRound },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    setIsScrolling(true);
    setActiveSection(id);
    setIsMenuOpen(false);
    element.scrollIntoView({ behavior: "smooth" });

    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.scrollY;

          const progress =
            (scrollTop / (documentHeight - windowHeight)) * 100;
          setScrollProgress(Math.min(progress, 100));

          if (!isScrolling) {
            const sections = ["home", "about", "projects", "contact"];
            let newActive = activeSection;

            for (const id of sections) {
              const el = document.getElementById(id);
              if (!el) continue;

              const rect = el.getBoundingClientRect();
              if (
                rect.top <= windowHeight / 3 &&
                rect.bottom >= windowHeight / 3
              ) {
                newActive = id;
                break;
              }
            }

            if (newActive !== activeSection) setActiveSection(newActive);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isScrolling]);

  // Mobile menu: lock page scroll while open, close on Escape or when resized to desktop
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsMenuOpen(false);
    const onResize = () => window.innerWidth >= 768 && setIsMenuOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [isMenuOpen]);

  return (
    <>
    {/* Mobile: top bar + slide-in menu */}
    <header className="md:hidden fixed top-0 inset-x-0 h-14 z-[100] flex items-center gap-3 px-4 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <button
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        className="p-2 -ml-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
      >
        <PanelLeftOpen className="w-5 h-5" />
      </button>
      <span className="font-semibold text-gray-900">Clara Kim</span>
    </header>

    <div
      className={`md:hidden fixed inset-0 z-[200] bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${
        isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={() => setIsMenuOpen(false)}
      aria-hidden="true"
    />

    <aside
      className={`md:hidden fixed top-3 bottom-3 left-3 z-[210] w-[280px] max-w-[calc(100vw-24px)] flex flex-col rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-2xl transition-transform duration-300 ease-out ${
        isMenuOpen ? "translate-x-0" : "-translate-x-[calc(100%+24px)]"
      }`}
      aria-label="Site navigation"
      inert={!isMenuOpen}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="font-semibold text-gray-900">Clara Kim</span>
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          className="p-2 -mr-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
        >
          <PanelLeftClose className="w-5 h-5" />
        </button>
      </div>

      {/* Profile card */}
      <div className="m-3 flex items-center gap-3 rounded-xl bg-purple-50 p-3">
        <Image
          src="/assets/images/my-photo.jpeg"
          alt="Clara Kim"
          width={44}
          height={44}
          className="w-11 h-11 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900">Clara Kim</p>
          <p className="text-xs text-gray-500">Software Engineer · UC Berkeley</p>
        </div>
      </div>

      <nav className="px-3 py-2 flex flex-col gap-1 border-t border-gray-100">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] transition-colors ${
                isActive ? "bg-purple-50 text-purple-700 font-medium" : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {isActive && <span className="absolute -left-3 top-2 bottom-2 w-1 rounded-r bg-purple-600" />}
              <Icon className="w-5 h-5" />
              {label}
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-4 py-4 border-t border-gray-100 flex flex-col gap-3">
        <a href="mailto:02clara.kim@berkeley.edu" className="flex items-center gap-3 text-sm text-gray-700">
          <Mail className="w-4 h-4" />
          02clara.kim@berkeley.edu
        </a>
        <a href="tel:+15623600753" className="flex items-center gap-3 text-sm text-gray-700">
          <Phone className="w-4 h-4" />
          (562) 360-0753
        </a>
        <div className="flex gap-3 pt-1">
          <a href="https://github.com/02clarakim" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Image src="/assets/icons/github-logo.png" alt="GitHub" width={28} height={28} />
          </a>
          <a href="https://www.linkedin.com/in/chaeeun-clara-kim-3249b7200/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Image src="/assets/icons/linkedin-logo.png" alt="LinkedIn" width={28} height={28} />
          </a>
        </div>
      </div>
    </aside>

    {/* Desktop sidebar */}
    <div className="max-md:hidden fixed left-0 top-0 w-[350px] h-screen border-r-2 border-gray-300 flex flex-col items-start pt-20 pl-[57px] bg-white/70 z-[100]">
      {/* Progress Bar */}
      <div
        className="absolute right-[-2px] top-0 w-0.5 bg-gradient-to-b from-black to-gray-300 transition-all duration-100 ease-out z-[101]"
        style={{ height: `${scrollProgress}%` }}
      ></div>

      {/* Profile */}
      <div className="relative w-[252px] h-[252px] mb-[50px]">
        <div className="w-[252px] h-[252px] rounded-full overflow-hidden relative">
          <Image
            src="/assets/images/my-photo.jpeg"
            alt="Profile"
            width={252}
            height={252}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <Image
          src="/assets/images/berkeley-img.png"
          alt="Berkeley"
          width={73}
          height={73}
          className="absolute top-[-2px] right-[-2px] w-[73px] h-[73px] rounded-full object-contain bg-white shadow-md z-[2]"
        />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2.5 mb-10">
        {["home", "about", "projects", "contact"].map((id) => (
          <div
            key={id}
            className={`text-[22px] text-black cursor-pointer transition-all ${
              activeSection === id ? "font-bold" : "font-normal hover:font-bold"
            }`}
            onClick={() => scrollToSection(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </div>
        ))}
      </nav>

      {/* Contact */}
      <div className="flex flex-col gap-2.5 mb-10">
        <div className="flex items-center gap-3">
          <Mail className="w-[25px] h-[25px] text-black" />
          <p className="text-[16px] text-black">02clara.kim@berkeley.edu</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-[25px] h-[25px] text-black" />
          <p className="text-[16px] text-black">(562) 360-0753</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 mt-2">
        <a
          href="https://github.com/02clarakim"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/assets/icons/github-logo.png"
            alt="GitHub"
            width={40}
            height={40}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/chaeeun-clara-kim-3249b7200/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <Image
            src="/assets/icons/linkedin-logo.png"
            alt="LinkedIn"
            width={40}
            height={40}
          />
        </a>
      </div>
    </div>
    </>
  );
}

export default Sidebar;