import Image from "next/image";

// Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

export default function ProjectPage() {
  return (
    <main className="relative w-full pt-27">
      <div className="flex flex-col md:gap-5 mb-16">
        <p className=" text-6xl font-[900] md:text-8xl ">
          My <span className="text-primary">Best</span> Creations
        </p>
        <p
          className="
          mt-3.5
            text-secondary100
            text-xl
            w-[90%]
            md:text-4xl
            md:w-[78%]
          "
        >
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </div>
      <section className="sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20">
        <div className="md:grow w-full rounded-4xl overflow-hidden">
          <Image
            src="/images/FoodieFinder-1.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto md:h-full md:object-cover"
            alt="FoodieFinder"
          />
        </div>

        <div className="flex flex-col gap-5  h-[150] md:h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            FoodieFinder
          </p>
          <p className="text-xl md:text-3xl md:w-[60%] text-secondary100">
            Modern-looking restaurant discovery platform featuring real-time
            search, reviews, and ratings.
          </p>
        </div>
      </section>

      <section className="sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20">
        <div className="md:grow w-full rounded-4xl overflow-hidden">
          <Image
            src="/images/EventPlanner.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto md:h-full md:object-cover"
            alt="EventPlanner"
          />
        </div>
        <div className="flex flex-col gap-5  h-[150] md:h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            EventPlanner
          </p>
          <p className="text-xl md:text-3xl md:w-[60%] text-secondary100">
            Event planning web application, enabling users to organise and
            manage events effortlessly.
          </p>
        </div>
      </section>
      <section className="sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20">
        <div className="md:grow w-full rounded-4xl overflow-hidden">
          <Image
            src="/images/EcoCart.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto md:h-full md:object-cover"
            alt="EcoCart"
          />
        </div>
        <div className="flex flex-col gap-5  h-[150] md:h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            EcoCart
          </p>
          <p className="text-xl md:text-3xl md:w-[60%] text-secondary100">
            E-commerce platform promoting eco-friendly products with payment
            integration.
          </p>
        </div>
      </section>
      <section className="sticky top-0 w-full md:h-screen flex flex-col bg-white mb-20">
        <div className="md:grow w-full rounded-4xl overflow-hidden">
          <Image
            src="/images/TaskFlow.webp"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto md:h-full md:object-cover"
            alt="TaskFlow"
          />
        </div>
        <div className="flex flex-col gap-5  h-[350] md:h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            TaskFlow
          </p>
          <p className="text-xl md:text-3xl md:w-[60%] text-secondary100">
            Task management system with drag-and-drop, real-time collaboration,
            and responsive layout.
          </p>
        </div>
        <footer className="bottom-0 left-0 w-full bg-white z-0 ">
          <div
            className="
              flex justify-between items-center px-3 py-3
              md:flex-col gap-6 text-center lg:flex-row 
            "
          >
            <div className="flex flex-row gap-5  md:gap-6 text-[var(--color-secondary100)] items-center  lg:gap-6">
              <p className="font-[600] text-xl cursor-pointer hover:text-primary ">
                Home
              </p>
              <p className="font-[600] text-xl cursor-pointer  hover:text-primary ">
                Projects
              </p>
              <p className="font-[600] text-xl cursor-pointer  hover:text-primary ">
                About
              </p>
              <p className="font-[600] text-xl cursor-pointer  hover:text-primary  ">
                Contact
              </p>
            </div>
            <div className="flex flex-row gap-5 text-[var(--color-secondary100)] font-[600] justify-center">
              <InstagramIcon fontSize="large" />
              <LinkedInIcon fontSize="large" />
              <GitHubIcon fontSize="large" />
              <SportsBasketballIcon fontSize="large" />
            </div>
          </div>

          <div className="px-3 py-6 flex flex-col gap-6 items-center md:items-center  md:text-center lg:items-start lg:text-left ">
            <div className="text-[var(--color-secondary100)] font-[600] text-2xl md:text-xl md:items-center md:text-center  ">
              Interested in working together
              <span className="text-primary">?</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-purple-800 transition font-[600]">
                Get in Touch
              </button>
              <button className="px-6 py-3 bg-background text-gray-800 hover:bg-gray-300 transition font-[600]">
                Browse Projects
              </button>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
