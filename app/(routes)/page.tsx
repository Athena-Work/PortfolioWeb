import HeroSection from "../components/home_page/HeroSection";
import ProjectsSection from "../components/home_page/ProjectsSection";

export default function Home() {
  return (
    <main className='flex flex-col gap-32'>
      <HeroSection />
      <ProjectsSection />
    </main>
  );
}
