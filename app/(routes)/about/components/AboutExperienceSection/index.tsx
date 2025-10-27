"use client";
import { useState, useEffect, useRef } from "react";

import { experiences } from "@/app/utils/homepage.constants";

export default function AboutExperienceSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setScrollProgress(0);
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(section);

    // Scroll event listener
    const handleScroll = () => {
      if (!section || !isInView) return;

      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      let progress = 0;

      // Only start animation when section is well into the viewport
      if (
        sectionTop <= windowHeight * 0.75 &&
        sectionBottom >= windowHeight * 0.25
      ) {
        if (sectionTop <= windowHeight * 0.4) {
          // Section is well into viewport, animate based on scroll through section
          const scrolledIntoSection = windowHeight * 0.4 - sectionTop;
          const animationRange = sectionHeight * 0.8; // Use 80% of section height for balanced animation
          progress = Math.min(1, scrolledIntoSection / animationRange);
        } else {
          // Section is just entering, wait until it's more visible
          progress = 0;
        }
      }

      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} className='w-full mt-30'>
      {/* Title */}
      <div className='flex items-baseline gap-[2px] mb-5'>
        <h2 className='text-4xl md:text-[56px] font-[800] text-secondary200'>
          My Experience
        </h2>
        <div className='w-[10px] h-[10px] rounded-full bg-primary' />
      </div>

      {/*  */}
      <div className='relative flex flex-col gap-2'>
        <div
          className='w-[4px] absolute md:top-20 left-4 md:left-10 bg-primary transition-all duration-300 ease-out'
          style={{
            height: isInView ? `${Math.min(scrollProgress * 100, 85)}%` : "0px",
            opacity: isInView ? 1 : 0,
          }}
        ></div>

        {experiences.map((experience, index) => {
          return (
            <div key={experience.id} className='flex gap-8 md:gap-24'>
              {/* Number */}
              <div
                className={`z-10 ${
                  index + 1 === experiences.length ? "" : "h-max"
                } flex flex-col gap-2 items-center bg-background`}
              >
                <span className='text-4xl md:text-7xl font-bold'>
                  {index + 1 < 10 ? "0" : ""}
                  {index + 1}
                </span>
              </div>

              {/* Title and Description */}
              <div className='flex flex-col gap-10 mb-20'>
                {/* Title */}
                <div className='flex flex-col gap-1'>
                  <span className='text-[10px] md:text-sm text-primary'>
                    {experience.position}
                  </span>
                  <span className='text-2xl md:text-4xl font-bold text-secondary200'>
                    {experience.company}
                  </span>
                </div>

                {/* Description */}
                <div className='flex flex-col gap-5'>
                  {experience.description.map((item, index) => {
                    return (
                      <span key={index} className='text-lg text-secondary100'>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
