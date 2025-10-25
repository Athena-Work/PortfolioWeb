import { skills } from "@/app/utils/homepage.constants";

export default function SkillsSection() {
  return (
    <section className='w-full'>
      {/* Title */}
      <div className='flex items-baseline gap-[2px] mb-5'>
        <h2 className='text-[56px] font-[800] text-secondary200'>Skills</h2>
        <div className='w-[10px] h-[10px] rounded-full bg-primary' />
      </div>

      {/* Skills */}
      <div className='flex flex-col md:flex-row items-start justify-between gap-7'>
        {skills.map((skill) => {
          return (
            <div key={skill.id} className='flex flex-col gap-3'>
              {/* Skill Title */}
              <span className='text-2xl text-secondary200 font-bold'>
                {skill.title}
              </span>

              {/* Skills */}
              <div className='flex flex-col gap-2'>
                {skill.skills.map((singleSkill) => {
                  return (
                    <span
                      key={singleSkill}
                      className='text-md text-secondary100'
                    >
                      {singleSkill}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
