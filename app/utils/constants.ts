interface Project {
  id: number;
  image: string;
  title: string;
  src: string;
  description: string;
}
export const projects: Project[] = [
  {
    id: 1,
    image: "/images/projects/project1.webp",
    title: "TaskFlow",
    src: "",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
  },
  {
    id: 1,
    image: "/images/projects/project2.webp",
    title: "EcoCart",
    src: "",
    description:
      "E-commerce platform promoting eco-friendly products with payment integration.",
  },
  {
    id: 1,
    image: "/images/projects/project3.webp",
    title: "EventPlanner",
    src: "",
    description:
      "Event planning web application, enabling users to organise and manage events effortlessly.",
  },
  {
    id: 1,
    image: "/images/projects/project4.webp",
    title: "FoodieFinder",
    src: "",
    description:
      "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
  },
];
