//Icons
import InstagramIcon from "@mui/icons-material/Instagram"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";


export default function ProjectPage() {
  return (
    <div className="p-4 w-full max-w-[1500px] mx-auto lg:max-w-[1500px]">
      <div className="pt-24 pb-16 flex flex-col gap-5">
        <p className="text-8xl font-[900] w-230 md:text-7xl">
          My <span className="text-[var(--color-primary)]"> Best </span>{" "}
          Creations
        </p>
        <p className="w-200 mt-7 text-[var(--color-secondary100)] text-3xl lg:w-[800px] lg:text-3xl md:text-2xl">
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </div>

      <section className="sticky top-0 z-[1] bg-white p-4 h-[850px]">
        <div>
          <img
            src="/images/FoodieFinder-1.webp"
            className="w-full h-[600px] rounded-3xl object-cover"
            alt="FoodieFinder"
          />
        </div>
        <div className="flex flex-col gap-5 h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            FoodieFinder
          </p>
          <p className="text-[var(--color-secondary100)] text-2xl md:text-3xl lg:text-3xl lg:w-[800px]">
            Modern-looking restaurant discovery platform featuring real-time
            search, reviews, and ratings.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-[1] bg-white p-4 h-[800px]">
        <div>
          <img
            src="/images/EventPlanner.webp"
            className="w-full h-[600px] rounded-3xl object-cover"
            alt="EventPlanner"
          />
        </div>
        <div className="flex flex-col gap-5 h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            EventPlanner
          </p>
          <p className="text-[var(--color-secondary100)] text-2xl md:text-3xl lg:text-3xl lg:w-[800px]">
            Event planning web application, enabling users to organise and
            manage events effortlessly.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-[1] bg-white p-4 h-[800px]">
        <div>
          <img
            src="/images/EcoCart.webp"
            className="w-full h-[600px] rounded-3xl object-cover"
            alt="EcoCart"
          />
        </div>
        <div className="flex flex-col gap-5 h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            EcoCart
          </p>
          <p className="text-[var(--color-secondary100)] text-2xl md:text-3xl lg:text-3xl lg:w-[800px]">
            E-commerce platform promoting eco-friendly products with payment
            integration.
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-[1] bg-white p-4 h-[1100px]">
        <div>
          <img
            src="/images/TaskFlow.webp"
            className="w-full h-[650px] rounded-3xl object-cover"
            alt="TaskFlow"
          />
        </div>
        <div className="flex flex-col gap-5 h-[270px]">
          <p className="text-5xl md:text-6xl lg:text-7xl font-[800] mt-5">
            TaskFlow
          </p>
          <p className="text-[var(--color-secondary100)] text-2xl md:text-3xl lg:text-3xl lg:w-[800px]">
            Task management system with drag-and-drop, real-time collaboration,
            and responsive layout.
          </p>
        </div>
        <footer className="bottom-0 left-0 w-full bg-white z-0 ">
          <div className="flex justify-between items-center px-10 py-6">
            <div className="flex flex-row gap-10 text-[var(--color-secondary100)] ">
              <p className="font-[600] text-2xl curser-pointer">Home</p>
              <p className="font-[600] text-2xl curser-pointer">Projects</p>
              <p className="font-[600] text-2xl curser-pointer">About</p>
              <p className="font-[600] text-2xl curser-pointer">Contact</p>
            </div>
            <div className="flex flex-row gap-5 text-[var(--color-secondary100)] font-[600] ">
              <InstagramIcon fontSize="large" />
              <LinkedInIcon fontSize="large" />
              <GitHubIcon fontSize="large" />
              <SportsBasketballIcon fontSize="large" />
            </div>
          </div>
          <div className="px-10 py-6 flex flex-col gap-6">
            <div className=" text-[var(--color-secondary100)] font-[600] text-2xl ">
              Interested in working together
              <span className="font-[600] text-2xl text-[var(--color-primary)] ">
                ?
              </span>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-lg hover:bg-purple-800 transition font-[600]">
                Get in Touch
              </button>
              <button className="px-6 py-3 bg-background text-gray-800  hover:bg-gray-300 transition font-[600]">
                Browse Projects
              </button>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );

  }