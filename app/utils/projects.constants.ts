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
  //   {
  //     id: 2,
  //     image: "/images/projects/project2.webp",
  //     title: "EcoCart",
  //     src: "",
  //     description:
  //       "E-commerce platform promoting eco-friendly products with payment integration.",
  //   },
  //   {
  //     id: 3,
  //     image: "/images/projects/project3.webp",
  //     title: "EventPlanner",
  //     src: "",
  //     description:
  //       "Event planning web application, enabling users to organise and manage events effortlessly.",
  //   },
  //   {
  //     id: 4,
  //     image: "/images/projects/project4.webp",
  //     title: "FoodieFinder",
  //     src: "",
  //     description:
  //       "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
  //   },
];

interface Client {
  name: string;
  recomendation: string;
  position: string;
  image: string;
}
