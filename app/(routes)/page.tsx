<<<<<<< HEAD


export default function Home() {
  return (
    <div className='flex flex-col p-10 gap-5 bg-background'>

    </div>
=======
import HeroSection from "../components/home_page/HeroSection";
import ProjectsSection from "../components/home_page/ProjectsSection";

export default function Home() {
  return (
    <main className='flex flex-col gap-32'>
      <HeroSection />
      <ProjectsSection />
    </main>
>>>>>>> b16567f91e9c1d11a4b6d58d15ab11ed34a37688
  );
}
