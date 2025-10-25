import ArrowTitleIcon from "@/public/icons/arrowTitle";
import Image from "next/image";
import { projects } from "@/app/utils/projects.constants";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find(
    (item) => item.title.toLowerCase() === slug.toLowerCase()
  );

  if (!project) {
    return <div>Project not found</div>;
  }


  const moreObjects = projects
    .filter((p) => p.id !== project.id)
    .slice(0, 2); 

  return (
    <section className="mt-14 px-5 md:px-10">
      {/* Title & Description */}
      <div className="text-5xl md:text-7xl font-[900]">
        {project.title} <span className="text-primary100 font-bold">.</span>
      </div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-6 gap-5">
        <div className="text-xl md:max-w-[700px] md:text-3xl text-secondary100">
          {project.description}
        </div>
        <div className="w-8 h-8 md:w-12 md:h-12">
          <ArrowTitleIcon size={32} color="#6e06f2" />
        </div>
      </div>

      <div className="mt-8 w-full h-[300px] md:h-[500px] relative rounded-xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover rounded-xl"
        />
      </div>

      {/* Left Card & Details */}
      <div className="flex flex-col md:flex-row md:justify-between gap-10 mt-10">
        <div className="w-full md:w-[350px] h-[210px] md:h-[160px] border-2 shadow-[0_0_4px_0_#6e06f2] border-primary rounded-xl p-5 md:sticky top-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 p-1">
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">Client</p>
              <h3 className="font-semibold text-lg">{project.client.name}</h3>
            </div>
            <div className="flex flex-col md:ml-10">
              <p className="text-gray-500 text-sm ">Year</p>
              <h3 className="font-semibold text-lg">{project.year}</h3>
            </div>
            <div className="flex flex-col md:col-span-2">
              <p className="text-gray-500 text-sm">My Role</p>
              <h3 className="font-semibold text-lg">{project.myRole}</h3>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-14">
          {/* About Section */}
          <div>
            <div className="text-4xl md:text-7xl font-[900] mt-3 md:mt-0">
              About
            </div>
            <div className="text-base md:text-2xl mt-4 text-secondary100 leading-relaxed text-justify">
              <p>{project.aboutTitleFirst}</p>
              <p className="mt-8">{project.aboutTitleSecond}</p>
            </div>
          </div>

          {/* Our Client Section */}
          <div>
            <div className="text-4xl md:text-7xl font-[900]">Our Client</div>
            <div className="text-base md:text-2xl mt-4 text-secondary100 leading-relaxed text-justify">
              <p>{project.ourClientTitleFirst}</p>
              <p className="mt-8">{project.ourClientTitleSecond}</p>
            </div>
          </div>

          {/* Challenges Section */}
          <div>
            <div className="text-4xl md:text-7xl font-[900]">Challenges</div>
            <div className="text-base md:text-2xl mt-4 text-secondary100 leading-relaxed text-justify">
              <p>{project.challengesTitleFirst}</p>
              <p className="mt-8">{project.challengesTitleSecond}</p>
            </div>
          </div>

          {/* Results Section */}
          <div>
            <div className="text-4xl md:text-7xl font-[900]">Results</div>
            <div className="text-base md:text-2xl mt-4 text-secondary100 leading-relaxed text-justify">
              <p>{project.resultsTitleFirst}</p>
              <p className="mt-8">{project.resultsTitleSecond}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
        {project.images.map((img, idx) => (
          <div key={idx} className={idx === 2 ? "w-full md:col-span-2" : ""}>
            <Image
              src={img}
              alt={`Project image ${idx + 1}`}
              width={idx === 2 ? 1200 : 800}
              height={300}
              sizes="100vw"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Client Recommendation */}
      <div className="w-[90%] md:w-[80%] border-2 shadow-[0_0_4px_0_#6e06f2] border-primary rounded-xl p-7 mt-38 mx-auto">
        <div className="flex flex-col-reverse md:flex-col">
          <div className="text-xl md:text-2xl mt-4 text-secondary100 leading-relaxed text-justify mb-12">
            <p>{project.client.recomendation}</p>
          </div>
          <div className="flex gap-5 items-center">
            <div className="w-20 h-20 md:w-20 md:h-20 relative">
              <Image
                src={project.client.image}
                alt="Client image"
                fill
                sizes="(max-width: 768px) 1rem, 2rem"
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-2xl">{project.client.name}</p>
              <p className="text-gray-500 text-xl">{project.client.position}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <div className="text-5xl md:text-7xl font-[900]">
          More Objects <span className="text-primary100 font-bold">.</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {moreObjects.map((obj) => (
            <div
              key={obj.id}
              className="flex flex-col rounded-xl overflow-hidden "
            >
              <div className="w-full h-80 relative">
                <Image
                  src={obj.image}
                  alt={obj.title}
                  fill
                  sizes="100vw"
                  className="object-cover rounded-xl"
                />
              </div>
   <div className="p-5 flex flex-col gap-5 ">
                <h3 className="text-xl font-bold md:text-3xl flex gap-4 items-center">
                  {obj.title} <ArrowTitleIcon size={26} color="#6e06f2" />
                </h3>
                <p className="text-secondary100 text-xl">{obj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
