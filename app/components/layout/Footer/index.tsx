// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

export default function Footer() {
  return (
    <footer className='bottom-0 left-0 w-full bg-background z-0 mt-20'>
      <div
        className='
              flex flex-col justify-between items-center px-3 py-3
              md:flex-col gap-6 text-center lg:flex-row 
            '
      >
        <div className='flex flex-row gap-5  md:gap-6 text-[var(--color-secondary100)] items-center  lg:gap-6'>
          <p className='font-[600] text-xl cursor-pointer hover:text-primary '>
            Home
          </p>
          <p className='font-[600] text-xl cursor-pointer  hover:text-primary '>
            Projects
          </p>
          <p className='font-[600] text-xl cursor-pointer  hover:text-primary '>
            About
          </p>
          <p className='font-[600] text-xl cursor-pointer  hover:text-primary  '>
            Contact
          </p>
        </div>
        <div className='flex flex-row gap-5 text-[var(--color-secondary100)] font-[600] justify-center cursor-pointer'>
          <InstagramIcon fontSize='large' className='hover:text-primary' />
          <LinkedInIcon fontSize='large' className='hover:text-primary' />
          <GitHubIcon fontSize='large' className='hover:text-primary' />
          <SportsBasketballIcon
            fontSize='large'
            className='hover:text-primary'
          />
        </div>
      </div>

      <div className='px-3 py-6 flex flex-col gap-6 items-center md:items-center  md:text-center lg:items-start lg:text-left '>
        <div className='text-[var(--color-secondary100)] font-[600] text-2xl md:text-xl md:items-center text-center  '>
          Interested in working together
          <span className='text-primary'>?</span>
        </div>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <button className='px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary100 transition font-[600]'>
            Get in Touch
          </button>
          <button className='px-6 py-3 bg-background text-gray-800 hover:bg-gray5 hover:text-white rounded-lg transition font-[600]'>
            Browse Projects
          </button>
        </div>
      </div>
    </footer>
  );
}
