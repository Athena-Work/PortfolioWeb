import Link from "next/link";

// Components
import LinksSection from "./LinksSection";

export default function Footer() {
  return (
    <footer className='bottom-0 left-0 w-full bg-background z-0 mt-20'>
      <div
        className='
              flex flex-col justify-between items-center px-3 py-3
              md:flex-col gap-6 text-center lg:flex-row 
            '
      >
        <LinksSection />
      </div>

      <div className='px-3 py-6 flex flex-col gap-6 items-center md:items-center  md:text-center lg:items-start lg:text-left '>
        <div className='text-[var(--color-secondary100)] font-[600] text-2xl md:text-xl md:items-center text-center  '>
          Interested in working together
          <span className='text-primary'>?</span>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <Link href='/contact'>
            <button className='px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary100 transition font-[600] cursor-pointer'>
              Get in Touch
            </button>
          </Link>
          <Link href='/projects'>
            {" "}
            <button className='px-6 py-3 bg-background text-gray-800 hover:bg-gray5 hover:text-white rounded-lg transition font-[600] cursor-pointer'>
              Browse Projects
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
