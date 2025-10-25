"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

// Icons
import DribbbleIcon from "@/public/icons/dribbble";
import GithubIcon from "@/public/icons/github";
import InstagramIcon from "@/public/icons/instagram";
import LinkedinIcon from "@/public/icons/linkedin";

export default function LinksSection() {
  const pathname = usePathname();
  const [hoveredIcon, setHoveredIcon] = useState<number>(0);

  return (
    <>
      <div className='flex flex-row gap-5  md:gap-6 text-[var(--color-secondary100)] items-center  lg:gap-6'>
        <Link href='/'>
          <p
            className={`font-[600] text-xl ${
              pathname === "/" ? "text-primary" : "text-secondary100"
            } cursor-pointer hover:text-primary`}
          >
            Home
          </p>
        </Link>
        <Link href='/projects'>
          <p
            className={`font-[600] text-xl ${
              pathname.startsWith("/projects")
                ? "text-primary"
                : "text-secondary100"
            } cursor-pointer  hover:text-primary`}
          >
            Projects
          </p>
        </Link>
        <Link href='/about'>
          <p
            className={`font-[600] text-xl ${
              pathname === "/about" ? "text-primary" : "text-secondary100"
            } cursor-pointer  hover:text-primary`}
          >
            About
          </p>
        </Link>
        <Link href='/contact'>
          <p
            className={`font-[600] text-xl ${
              pathname === "/contact" ? "text-primary" : "text-secondary100"
            } cursor-pointer  hover:text-primary`}
          >
            Contact
          </p>
        </Link>
      </div>
      <div className='flex flex-row gap-5 text-[var(--color-secondary100)] font-[600] justify-center cursor-pointer'>
        <Link
          href='/'
          onMouseEnter={() => setHoveredIcon(1)}
          onMouseLeave={() => setHoveredIcon(0)}
        >
          <InstagramIcon color={hoveredIcon === 1 ? "#6e06f2" : undefined} />
        </Link>
        <Link
          href='/'
          onMouseEnter={() => setHoveredIcon(2)}
          onMouseLeave={() => setHoveredIcon(0)}
        >
          <LinkedinIcon color={hoveredIcon === 2 ? "#6e06f2" : undefined} />
        </Link>
        <Link
          href='/'
          onMouseEnter={() => setHoveredIcon(3)}
          onMouseLeave={() => setHoveredIcon(0)}
        >
          <GithubIcon
            size={26}
            color={hoveredIcon === 3 ? "#6e06f2" : undefined}
          />
        </Link>
        <Link
          href='/'
          onMouseEnter={() => setHoveredIcon(4)}
          onMouseLeave={() => setHoveredIcon(0)}
        >
          <DribbbleIcon color={hoveredIcon === 4 ? "#6e06f2" : undefined} />
        </Link>
      </div>
    </>
  );
}
