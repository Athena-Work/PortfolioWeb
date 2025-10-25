export default function MyStorySection() {
  return (
    <section className='w-full'>
      {/* Title */}
      <div className='flex items-baseline gap-[2px] mb-5'>
        <h2 className='text-[56px] font-[800] text-secondary200'>My Story</h2>
        <div className='w-[10px] h-[10px] rounded-full bg-primary' />
      </div>

      {/* Story */}
      <div className='flex flex-col gap-4'>
        <span className='text-secondary100 text-lg font-normal'>
          My journey as a front-end developer started back in 2010, working as a
          <span className='text-primary'> freelancer</span> for clients all over
          the world for several years.
        </span>

        <span className='text-secondary100 text-lg font-normal'>
          After being on my own for a while, I decided to enter the corporate
          world, and I started working as a software developer at{" "}
          <span className='text-primary'> Webflow</span>, the same platform I
          was using with my freelance clients.
        </span>

        <span className='text-secondary100 text-lg font-normal'>
          After some exciting months of work at Webflow, I decided to transition
          to <span className='text-primary'> Stripe</span>, where I returned
          what I love: front-end development.{" "}
        </span>

        <span className='text-secondary100 text-lg font-normal'>
          My <span className='text-primary'> success</span> quickly compounded I
          started receiving job offers from the biggest names in the industry.
        </span>

        <span className='text-secondary100 text-lg font-normal'>
          All these opportunities led me to travel the world. Eventually,
          however, I decided to settle down for a more calm and simple routine,
          and I&apos;m now working at Apple. And you know what? I love what I
          do! 💜
        </span>
      </div>
    </section>
  );
}
