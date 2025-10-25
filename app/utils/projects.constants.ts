interface Project {
  id: number;
  image: string;
  title: string;
  src: string;
  description: string;
  year: number;
  aboutTitleFirst: string;
  aboutTitleSecond: string;
  ourClientTitleFirst: string;
  ourClientTitleSecond: string;
  challengesTitleFirst: string;
  challengesTitleSecond: string;
  resultsTitleFirst: string;
  resultsTitleSecond: string;
  images: string[];
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
      "Task management system with drag-and-drop, real-time collaboration, and responsive layout",
    year: 2022,
    myRole: "Frontend Developer",
    aboutTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    aboutTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ourClientTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    ourClientTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    challengesTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    challengesTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    resultsTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    resultsTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: {
      name: "Tony Stark",
      recomendation:
        "I had the pleasure of working with Luca on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend Luca for anyone looking for a talented and professional designer.",
      position: "CEO at Apple",
      image: "/images/client-image.avif",
    },
    images: [
      "/images/projects/project1.webp",
      "/images/projects/project1.webp",
      "/images/projects/project1.webp",
    ],
  },
  {
    id: 2,
    image: "/images/projects/project2.webp",
    title: "EcoCart",
    src: "/projects/EcoCart",
    description:
      "E-commerce platform promoting eco-friendly products with payment integration",
    year: 2021,
    myRole: "Lead Designer",
    aboutTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    aboutTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ourClientTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    ourClientTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    challengesTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    challengesTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    resultsTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    resultsTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: {
      name: "Jane Doe",
      recomendation:
        "Working with Luca was a game-changer for my business. Their design expertise took my brand to a whole new level. The collaboration was smooth, and the final product exceeded my expectations. I highly recommend [Your Name] for anyone looking to elevate their online presence!",
      position: "Managing Director at Stripe",
      image: "/images/taskflow-client.avif",
    },
    images: [
      "/images/projects/project2.webp",
      "/images/projects/project2.webp",
      "/images/projects/project2.webp",
    ],
  },

  {
    id: 3,
    image: "/images/projects/project3.webp",
    title: "EventPlanner",
    src: "/projects/EventPlanner",
    description:
      "Event planning web application, enabling users to organise and manage events effortlessly.",
    year: 2023,
    myRole: "Frontend Developer",
    aboutTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    aboutTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ourClientTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    ourClientTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    challengesTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    challengesTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    resultsTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    resultsTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: {
      name: "John Smith",
      recomendation:
        "Luca was an absolute professional like no one else, his constant communication, high standard and persistent drive to ensure his work was far above the standard impressed me. His collaboration brought a great deal of value to me and I would reccomend anyone to him whether for long term or one off.",
      position: "Marketing Director at Webflow",
      image: "/images/john-smith.avif",
    },
    images: [
      "/images/projects/project3.webp",
      "/images/projects/project3.webp",
      "/images/projects/project3.webp",
    ],
  },
  {
    id: 4,
    image: "/images/projects/project4.webp",
    title: "FoodieFinder",
    src: "/projects/FoodieFinder",
    description:
      "Modern-looking restaurant discovery platform featuring real-time search, reviews, and ratings.",
    year: 2020,
    myRole: "Software Engineer",
    aboutTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    aboutTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ourClientTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    ourClientTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    challengesTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    challengesTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    resultsTitleFirst:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    resultsTitleSecond:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    client: {
      name: "Sarah Rodriguez",
      recomendation:
        "Luca was very good in the creation of our website, very attentive and willing to make changes to every request. He also has a lot of good ideas and can find the best solution based on your needs. I recommend Luca to everyone, a good professional and a great person.",
      position: "CFO at Spotify",
      image: "/images/sarah-rodriguez.avif",
    },
    images: [
      "/images/projects/project4.webp",
      "/images/projects/project4.webp",
      "/images/projects/project4.webp",
    ],
  },
];

interface Client {
  name: string;
  recomendation: string;
  position: string;
  image: string;
}
