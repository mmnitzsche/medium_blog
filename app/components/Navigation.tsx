'use client'
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "py-4 bg-white/80 backdrop-blur-lg shadow-sm"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-end items-center">
        <div className="flex gap-8">
          <a
            href="#projects"
            className="hover:text-primary/80 transition-colors hover:text-black"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-primary/80 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-primary/80 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;