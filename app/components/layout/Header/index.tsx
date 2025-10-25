// Next
import Link from "next/link";

// Components
import MobileDropDown from "./MobileDropDown";
import DesktopMenu from "./DesktopMenu";

// Icons
// import ContactIcon from "@/public/icons/";

export default function Header() {
  return (
    <header className='relative flex justify-between items-center py-3'>
      {/* Website Title */}
      <div className='flex items-baseline gap-[2px]'>
        <h2 className='text-lg font-[500] text-secondary200'>AtenRad</h2>
        <div className='w-[5px] h-[5px] rounded-full bg-primary' />
      </div>

      {/* Manu */}
      <ul className='hidden md:flex gap-7 m-0'>
        <DesktopMenu />
      </ul>

      {/* Contact */}
      <div className='min-w-[80px] hidden md:flex justify-end'>
        <Link href='/contact'>
          <div className='shrink-0 w-8 h-8 flex justify-center items-center rounded-full bg-secondary200'>
            {/* <ContactIcon /> */}
          </div>
        </Link>
      </div>

      <MobileDropDown />
    </header>
  );
}
