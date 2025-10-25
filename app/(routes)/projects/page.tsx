import Image from "next/image";

export default function ProjectPage() {
  return (
    <main className='relative w-full pt-27'>
      <div className='flex flex-col md:gap-5 mb-16'>
        <p className=' text-6xl font-[900] md:text-8xl '>
          My <span className='text-primary'>Best</span> Creations
        </p>
        <p
          className='
          mt-3.5
            text-secondary100
            text-xl
            w-[90%]
            md:text-4xl
            md:w-[78%]
          '
        >
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </div>

      <section className='sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20'>
        <div className='md:grow w-full rounded-4xl overflow-hidden'>
          <Image
            src='/images/FoodieFinder-1.webp'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto md:h-full md:object-cover'
            alt='FoodieFinder'
          />
        </div>

        <div className='flex flex-col gap-5  h-[150] md:h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            FoodieFinder
          </p>
          <p className='text-xl md:text-3xl md:w-[60%] text-secondary100'>
            Modern-looking restaurant discovery platform featuring real-time
            search, reviews, and ratings.
          </p>
        </div>
      </section>

      <section className='sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20'>
        <div className='md:grow w-full rounded-4xl overflow-hidden'>
          <Image
            src='/images/EventPlanner.webp'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto md:h-full md:object-cover'
            alt='EventPlanner'
          />
        </div>
        <div className='flex flex-col gap-5  h-[150] md:h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            EventPlanner
          </p>
          <p className='text-xl md:text-3xl md:w-[60%] text-secondary100'>
            Event planning web application, enabling users to organise and
            manage events effortlessly.
          </p>
        </div>
      </section>

      <section className='sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20'>
        <div className='md:grow w-full rounded-4xl overflow-hidden'>
          <Image
            src='/images/EcoCart.webp'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto md:h-full md:object-cover'
            alt='EcoCart'
          />
        </div>
        <div className='flex flex-col gap-5  h-[150] md:h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            EcoCart
          </p>
          <p className='text-xl md:text-3xl md:w-[60%] text-secondary100'>
            E-commerce platform promoting eco-friendly products with payment
            integration.
          </p>
        </div>
      </section>

      <section className='sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20'>
        <div className='md:grow w-full rounded-4xl overflow-hidden'>
          <Image
            src='/images/TaskFlow.webp'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-auto md:h-full md:object-cover'
            alt='TaskFlow'
          />
        </div>
        <div className='flex flex-col gap-5  h-[350] md:h-[270px]'>
          <p className='text-5xl md:text-6xl lg:text-7xl font-[800] mt-5'>
            TaskFlow
          </p>
          <p className='text-xl md:text-3xl md:w-[60%] text-secondary100'>
            Task management system with drag-and-drop, real-time collaboration,
            and responsive layout.
          </p>
        </div>
      </section>
    </main>
  );
}
