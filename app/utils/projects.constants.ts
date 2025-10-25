interface Project {
  id: number;
  image: string;
  title: string;
  src: string;
  description: string;
  year: number;
  myRole: string;
  client: Client;
}
export const projects: Project[] = [
  {
    id: 1,
    image: "/images/projects/project1.webp",
    title: "TaskFlow",
    src: "/projects/taskflow",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
    year: 2022,
    myRole: "rontend Developer",
    client: {
      name: "Tony Stark",
      recomendation:
        "I had the pleasure of working with Luca on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Luca for anyone looking for a talented and professional designer.",
      position: "CEO at Apple",
      image: "",
    },
  },
  {
    id: 1,
    image: "/images/projects/project1.webp",
    title: "TaskFlow",
    src: "/projects/taskflow",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
    year: 2022,
    myRole: "rontend Developer",
    client: {
      name: "Tony Stark",
      recomendation:
        "I had the pleasure of working with Luca on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Luca for anyone looking for a talented and professional designer.",
      position: "CEO at Apple",
      image: "",
    },
  },
  {
    id: 1,
    image: "/images/projects/project1.webp",
    title: "TaskFlow",
    src: "/projects/taskflow",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
    year: 2022,
    myRole: "rontend Developer",
    client: {
      name: "Tony Stark",
      recomendation:
        "I had the pleasure of working with Luca on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Luca for anyone looking for a talented and professional designer.",
      position: "CEO at Apple",
      image: "",
    },
  },
  {
    id: 1,
    image: "/images/projects/project1.webp",
    title: "TaskFlow",
    src: "/projects/taskflow",
    description:
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout.",
    year: 2022,
    myRole: "rontend Developer",
    client: {
      name: "Tony Stark",
      recomendation:
        "I had the pleasure of working with Luca on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Luca for anyone looking for a talented and professional designer.",
      position: "CEO at Apple",
      image: "",
    },
  },
];

interface Client {
  name: string;
  recomendation: string;
  position: string;
  image: string;
}
