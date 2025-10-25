import EarthDrag from "./components/Globe";
import InfiniteScroll from "./components/InfiniteScroll";

export default function AboutPage() {
  return (
    <main className='w-full py-30'>
      {/* Title */}
      <div className='flex items-end gap-[2px] mb-9'>
        <h2 className='text-5xl md:text-7xl font-[900] text-secondary200'>
          About me
        </h2>
        <div className='w-[15px] h-[15px] rounded-full bg-primary' />
      </div>

      {/* Description */}
      <div className='pl-3 border-l-6 md:border-l-9 border-l-primary mb-20'>
        <span className='text-lg md:text-2xl text-secondary100'>
          Developing beautiful and functional websites is what I love doing, and
          that&apos;s why I give my all in every new challenge.
        </span>
      </div>

      <div className='flex flex-col md:flex-row flex-wrap gap-12'>
        {/* First Card */}
        <div className='w-full md:w-[417px] flex flex-col gap-3.5'>
          {/* Title */}
          <div className='flex items-baseline gap-[2px]'>
            <h2 className='text-xl font-[700] text-secondary200'>My Stack</h2>
            <div className='w-[5px] h-[5px] rounded-full bg-secondary200' />
          </div>

          {/* Card */}
          <div className='w-full h-[250px] flex flex-col justify-center gap-10 bg-[#b8b8b8] rounded-2xl shadow-shadow1 overflow-hidde'>
            <InfiniteScroll
              texts={[
                "Responsive Design",
                "UI/UX Expertise",
                "HTML5/CSS3 Mastery",
              ]}
            />
            <InfiniteScroll
              toRight
              texts={[
                "JavaScript Proficiency",
                "Design Tools Mastery",
                "Collaborative Team Player",
              ]}
            />
            <InfiniteScroll
              texts={[
                "Problem Solving",
                "Keeping Abreast of Trends",
                "Attention to Detail",
              ]}
            />
          </div>
        </div>

        {/* Second Card */}
        <div className='grow md:min-w-[417px] flex flex-col gap-3.5'>
          {/* Title */}
          <div className='flex items-baseline gap-[2px]'>
            <h2 className='text-xl font-[700] text-secondary200'>
              My Special Place
            </h2>
            <div className='w-[5px] h-[5px] rounded-full bg-secondary200' />
          </div>

          <div className='max-w-full h-[250px] bg-[#b8b8b8] rounded-2xl shadow-shadow1 overflow-hidden cursor-grab'>
            <EarthDrag />
          </div>
        </div>
      </div>
    </main>
  );
}
