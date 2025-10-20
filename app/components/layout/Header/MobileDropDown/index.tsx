"use client";

import { useState } from "react";

export default function MobileDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className='md:hidden'>
      <button
        className='relative w-[30px] h-[30px] cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`absolute w-full h-[2px] bg-secondary100 ${
            isOpen ? "top-[12px] left-[1px] rotate-45" : "top-[8px] left-0"
          }`}
        ></div>
        <div
          className={`absolute w-full h-[2px] bg-secondary100 ${
            isOpen
              ? "bottom-[15px] left-0 rotate-[-45deg]"
              : " bottom-[10px] left-0"
          }`}
        ></div>
      </button>

      <nav
        className={`absolute left-0 top-full w-full ${
          isOpen ? "max-h-[500px] p-3" : "max-h-0 p-0"
        } bg-secondary100 rounded-md overflow-hidden`}
      >
        <ul className='flex flex-col gap-7 m-0'>
          <li className='text-xl text-white font-[500]'>Home</li>
          <li className='text-xl text-white font-[500]'>Projects</li>
          <li className='text-xl text-white font-[500]'>About</li>
          <li className='text-xl text-white font-[500]'>Get In Touch</li>
        </ul>
      </nav>
    </div>
  );
}
