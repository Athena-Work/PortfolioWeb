import Image from "next/image";

export default function HeroSection() {
  return (
    <section className='flex flex-col md:flex-row justify-between gap-15 md:gap-0 py-[50px]'>
      {/* Title */}
      <div className='max-w-[650px] flex flex-col'>
        <span className='text-xl text-secondary100 font-[400]'>
          Hey, We&apos;re AtenRad 👋🏻
        </span>

        <span className='text-6xl md:text-8xl text-secondary200 font-[800] mb-5'>
          <span className='text-primary'>Front</span>end Developer
        </span>

        <span className='text-lg text-secondary100 font-[400] mb-8'>
          We&apos;re frontend developer team based in Iran, We&apos;ll help you
          build beautiful websites your users will love.
        </span>

        <div className='flex gap-2'>
          <button className='min-w-max h-[44px] px-6 text-md text-white font-[500] rounded-lg bg-primary'>
            Get In Touch
          </button>
          <button className='min-w-max h-[44px] px-6 text-md text-secondary200 font-[500] rounded-lg border-2 border-secondary200'>
            Browse Projects
          </button>
        </div>
      </div>

      {/* Image */}
      <div className='grow flex justify-center md:justify-end'>
        <div className='w-[300px] h-[300px] md:w-[380px] md:h-[380px] p-7 border border-primary rounded-full'>
          <Image
            src='/images/hero-section.jpg'
            alt='iamge'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full rounded-full'
          />
        </div>
      </div>
    </section>
  );
}
