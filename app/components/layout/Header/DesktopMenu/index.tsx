"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DesktopMenu() {
  const pathname = usePathname();

  return (
    <>
      <Link href='/'>
        <li
          className={`text-lg font-[500] ${
            pathname === "/" ? "text-primary" : "text-secondary100"
          }`}
        >
          Home
        </li>
      </Link>
      <Link href='/projects'>
        <li
          className={`text-lg font-[500] ${
            pathname.startsWith("/projects")
              ? "text-primary"
              : "text-secondary100"
          }`}
        >
          Projects
        </li>
      </Link>
      <Link href='/about'>
        <li
          className={`text-lg font-[500] ${
            pathname === "/about" ? "text-primary" : "text-secondary100"
          }`}
        >
          About
        </li>
      </Link>
    </>
  );
}
