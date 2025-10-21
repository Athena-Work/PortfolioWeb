import Image from "next/image";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

export default function ProjectPage() {
  return (
    <main className='w-full max-w-[1500px] mx-auto'>
      {/* Header Section */}
      <div className='pt-24 pb-16 flex flex-col md:gap-5'>
        <p className='text-6xl font-[900] md:text-8xl '>
          My <span className='text-primary'>Best</span> Creations
        </p>
        <p
          className='
            mt-7
            text-secondary100
              text-lg
              md:text-3xl
          '
        >
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </div>

      {/* FoodieFinder */}
      <section className='sticky top-0 z-[1] bg-white h-[600px] md:h-[850px] '>
        <div>
          <Image
            src='/images/FoodieFinder-1.webp'
            width={0}
            height={0}
            sizes='100vw'
            className='
              w-full
              h-[700px]
                sm:h-[400px]
                 md:h-[600px]
              rounded-3xl
              object-contain
            '
            alt='FoodieFinder'
          />
        </div>
        <div className='flex flex-col gap-5 h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            FoodieFinder
          </p>
          <p
            className='
              text-[var(--color-secondary100)]
                text-3xl
              md:text-2xl
              lg:text-2xl
              lg:w-auto
              xl:w-[1000px]
              2xl:w-[650px]
            '
          >
            Modern-looking restaurant discovery platform featuring real-time
            search, reviews, and ratings.
          </p>
        </div>
      </section>

      {/* EventPlanner */}
      <section className='sticky top-0 z-[1] bg-white p-4 h-[600px] md:h-[850px] '>
        <div>
          <img
            src='/images/EventPlanner.webp'
            className='
              w-full
              h-[600px]
               md:h-[600px]
              sm:h-[400px]
              rounded-3xl
              object-cover
            '
            alt='EventPlanner'
          />
        </div>
        <div className='flex flex-col gap-5 h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            EventPlanner
          </p>
          <p
            className='
              text-[var(--color-secondary100)]
               text-3xl
              md:text-2xl
              lg:text-2xl
              lg:w-auto
              xl:w-[1000px]
              2xl:w-[650px]
            '
          >
            Event planning web application, enabling users to organise and
            manage events effortlessly.
          </p>
        </div>
      </section>

      {/* EcoCart */}
      <section className='sticky top-0 z-[1] bg-white p-4 h-[600px] md:h-[850px] '>
        <div>
          <img
            src='/images/EcoCart.webp'
            className='
              w-full
              h-[600px]
          md:h-[600px]
              sm:h-[400px]
              rounded-3xl
              object-cover
            '
            alt='EcoCart'
          />
        </div>
        <div className='flex flex-col gap-5 h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            EcoCart
          </p>
          <p
            className='
              text-[var(--color-secondary100)]
                text-3xl
              md:text-2xl
              lg:text-2xl
              lg:w-auto
              xl:w-[1000px]
              2xl:w-[650px]
            '
          >
            E-commerce platform promoting eco-friendly products with payment
            integration.
          </p>
        </div>
      </section>

      {/* TaskFlow */}
      <section className='sticky top-0 z-[1] bg-white p-4 h-[1100px]'>
        <div>
          <img
            src='/images/TaskFlow.webp'
            className='
              w-full
              h-[650px]
               md:h-[600px]
              sm:h-[400px]
              rounded-3xl
              object-cover
            '
            alt='TaskFlow'
          />
        </div>
        <div className='flex flex-col gap-5 h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            TaskFlow
          </p>
          <p
            className='
              text-[var(--color-secondary100)]
                text-3xl
              md:text-2xl
              lg:text-2xl
              lg:w-auto
              xl:w-[1000px]
              2xl:w-[650px]
            '
          >
            Task management system with drag-and-drop, real-time collaboration,
            and responsive layout.
          </p>
        </div>

        <footer className='bottom-0 left-0 w-full bg-white z-0 '>
          <div
            className='
              flex justify-between items-center px-3 py-3
              md:flex-col gap-6 text-center lg:flex-row 
            '
          >
            <div className='flex flex-row gap-5   md:gap-6 text-[var(--color-secondary100)] items-center  lg:gap-6'>
              <p className='font-[600] text-xl cursor-pointer'>Home</p>
              <p className='font-[600] text-xl cursor-pointer'>Projects</p>
              <p className='font-[600] text-xl cursor-pointer'>About</p>
              <p className='font-[600] text-xl cursor-pointer'>Contact</p>
            </div>
            <div className='flex flex-row gap-5 text-[var(--color-secondary100)] font-[600] justify-center'>
              <InstagramIcon fontSize='large' />
              <LinkedInIcon fontSize='large' />
              <GitHubIcon fontSize='large' />
              <SportsBasketballIcon fontSize='large' />
            </div>
          </div>

          <div className='px-3 py-6 flex flex-col gap-6 items-center md:items-center  md:text-center lg:items-start lg:text-left '>
            <div className='text-[var(--color-secondary100)] font-[600] text-2xl md:text-xl md:items-center md:text-center  '>
              Interested in working together
              <span className='text-[var(--color-primary)]'>?</span>
            </div>
            <div className='flex flex-col md:flex-row gap-4 items-center'>
              <button className='px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-purple-800 transition font-[600]'>
                Get in Touch
              </button>
              <button className='px-6 py-3 bg-background text-gray-800 hover:bg-gray-300 transition font-[600]'>
                Browse Projects
              </button>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
