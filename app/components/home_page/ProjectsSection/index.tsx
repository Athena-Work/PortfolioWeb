// Next
import Image from "next/image";

// Icons
import ArrowIcon from "@/public/icons/arrow";

// Constants
import { projects } from "@/app/utils/constants";

export default function ProjectsSection() {
  return (
    <section className='w-full'>
      {/* Title */}
      <div className='flex items-baseline gap-[2px] mb-2'>
        <h2 className='text-[56px] font-[800] text-secondary200'>Projects</h2>
        <div className='w-[10px] h-[10px] rounded-full bg-primary' />
      </div>

      {/* Projects */}
      <div className='w-full flex flex-col gap-10'>
        <div className='w-full min-w-0 flex flex-col md:flex-row gap-10'>
          <div className='shrink-0 w-full md:w-[496px] flex flex-col gap-10'>
            <Image
              src={projects[0].image}
              alt='project1'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-[325px] rounded-xl object-cover'
            />

            <div className='flex flex-col gap-2'>
              <div className='relative max-w-max flex items-center gap-2'>
                <span className='text-3xl font-[800] text-secondary200'>
                  {projects[0].title}
                </span>

                <div className='absolute right-[-40px] w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-primary'>
                  <ArrowIcon color='#6e06f2' />
                </div>
              </div>

              <span className='text-md font-[500] text-secondary100'>
                {projects[0].description}
              </span>
            </div>
          </div>

          <div className='grow md:min-w-[496px] min-w-0 flex flex-col gap-10'>
            <Image
              src={projects[1].image}
              alt='project1'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-[325px] rounded-xl object-cover'
            />

            <div className='flex flex-col gap-2'>
              <div className='relative max-w-max flex items-center gap-2'>
                <span className='text-3xl font-[800] text-secondary200'>
                  {projects[1].title}
                </span>

                <div className='absolute right-[-40px] w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-primary'>
                  <ArrowIcon color='#6e06f2' />
                </div>
              </div>
              <span className='text-md font-[500] text-secondary100'>
                {projects[1].description}
              </span>
            </div>
          </div>
        </div>

        <div className='w-full min-w-0 flex flex-col md:flex-row gap-10'>
          <div className='grow md:min-w-[496px] min-w-0 flex flex-col gap-10'>
            <Image
              src={projects[3].image}
              alt='project1'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-[325px] rounded-xl object-cover'
            />

            <div className='flex flex-col gap-2'>
              <div className='relative max-w-max flex items-center gap-2'>
                <span className='text-3xl font-[800] text-secondary200'>
                  {projects[2].title}
                </span>

                <div className='absolute right-[-40px] w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-primary'>
                  <ArrowIcon color='#6e06f2' />
                </div>
              </div>
              <span className='text-md font-[500] text-secondary100'>
                {projects[3].description}
              </span>
            </div>
          </div>

          <div className='shrink-0 w-full md:w-[496px] flex flex-col gap-10'>
            <Image
              src={projects[2].image}
              alt='project1'
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-[325px] rounded-xl object-cover'
            />

            <div className='flex flex-col gap-2'>
              <div className='relative max-w-max flex items-center gap-2'>
                <span className='text-3xl font-[800] text-secondary200'>
                  {projects[3].title}
                </span>

                <div className='absolute right-[-40px] w-[25px] h-[25px] flex justify-center items-center rounded-full border-2 border-primary'>
                  <ArrowIcon color='#6e06f2' />
                </div>
              </div>
              <span className='text-md font-[500] text-secondary100'>
                {projects[3].description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
