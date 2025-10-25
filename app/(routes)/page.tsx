import ExperiencesSection from "../components/home_page/ExperiencesSection";
import HeroSection from "../components/home_page/HeroSection";
import MyStorySection from "../components/home_page/MyStorySection";
import ProjectsSection from "../components/home_page/ProjectsSection";
import SkillsSection from "../components/home_page/SkillsSection";

export default function Home() {
  return (
    <main className='flex flex-col gap-32'>
      <HeroSection />
      <ProjectsSection />
      <ExperiencesSection />
      <SkillsSection />
      <MyStorySection />
    </main>
  );
}
