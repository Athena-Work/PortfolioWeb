"use client";
// Packages
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Icons
import TickIcon from "@/public/icons/tick";

// Constants
import { experiences } from "@/app/utils/homepage.constants";

export default function ExperiencesSection() {
  const [active, setActive] = useState<number>(1);

  return (
    <section className='w-full'>
      {/* Title */}
      <div className='flex items-baseline gap-[2px] mb-4'>
        <h2 className='text-[56px] font-[800] text-secondary200'>
          Experiences
        </h2>
        <div className='w-[10px] h-[10px] rounded-full bg-primary' />
      </div>

      {/* Experiences */}
      <div className='flex flex-col md:flex-row gap-5 md:gap-40'>
        <ul className='shrink-0 flex md:flex-col w-full md:w-auto overflow-auto'>
          {experiences.map((experience) => {
            return (
              <li
                key={experience.id}
                className={`p-4 border-b-4 md:border-l-4 md:border-b-0 ${
                  experience.id === active
                    ? "border-primary"
                    : "border-secondary100"
                }`}
              >
                <button
                  className={`text-xl ${
                    experience.id === active
                      ? "text-primary"
                      : "text-secondary200"
                  } font-[600] cursor-pointer`}
                  onClick={() => setActive(experience.id)}
                >
                  {experience.company}
                </button>
              </li>
            );
          })}
        </ul>

        <div className='relative grow'>
          <AnimatePresence mode='wait'>
            {experiences.map((experience) => {
              if (experience.id === active) {
                return (
                  <motion.div
                    key={experience.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className='relative inset-0 w-full flex flex-col gap-10 py-1'
                  >
                    {/* Title */}
                    <div className='flex flex-col gap-2'>
                      <span className='text-2xl text-secondary200 font-[600]'>
                        {experience.position}{" "}
                        <span className='text-primary'>
                          @{experience.company}
                        </span>
                      </span>
                      <span className='text-md'>
                        {experience.startDate} - {experience.endDate}
                      </span>
                    </div>

                    {/* Works */}
                    <div className='flex flex-col gap-5'>
                      {experience.works.map((work, index) => {
                        return (
                          <div key={index} className='flex items-center gap-4'>
                            <div className='shrink-0'>
                              <TickIcon color='#6e06f2' />
                            </div>

                            <span className='text-lg text-secondary100 font-[500]'>
                              {work}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                );
              }
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
