interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  works: string[];
  description: string[];
}
export const experiences: Experience[] = [
  {
    id: 1,
    company: "Apple",
    position: "Engineer",
    startDate: "May 2018",
    endDate: "Precent",
    works: [
      "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
      "Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs",
      "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
    ],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt. Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.",
      "Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit interdum.",
    ],
  },
  {
    id: 2,
    company: "Microsoft",
    position: "Frontend Developer",
    startDate: "January",
    endDate: "April 2018",
    works: [
      "Worked with a team to build a marketing website and e-commerce platform for blistabloc, an ambitious startup.",
      "Helped solidify a brand direction for blistabloc that spans both packaging and web.",
      "Interfaced with clients on a weekly basis, providing technological expertise.",
    ],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt. Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.",
      "Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit interdum.",
    ],
  },
  {
    id: 3,
    company: "Spotify",
    position: "UI Engineer",
    startDate: "July",
    endDate: "December 2017",
    works: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems.",
      "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
    ],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt. Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.",
      "Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit interdum.",
    ],
  },
  {
    id: 4,
    company: "Stripe",
    position: "Frontend Developer",
    startDate: "January",
    endDate: "June 2017",
    works: [
      "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
      "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
      "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
    ],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt. Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.",
      "Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit interdum.",
    ],
  },
  {
    id: 5,
    company: "Webflow",
    position: "Software Developer",
    startDate: "July",
    endDate: "December 2016",
    works: [
      "Implemented performance optimization strategies, resulting in a 20% improvement in page load times across the platform.",
      "Ensured cross-browser compatibility for the platform, enhancing the user experience for a diverse user base.",
      "Integrated interactive data analytics features into the platform.",
    ],
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam nisl sit amet lacus volutpat, vitae commodo odio tincidunt. Suspendisse libero purus, tincidunt in massa vel, eleifend aliquet mi. Sed erat lorem, posuere quis dolor ullamcorper, posuere bibendum arcu.",
      "Donec lacinia rutrum nibh faucibus malesuada. Quisque non aliquam nibh, quis laoreet magna. Morbi blandit ex sed lorem blandit interdum.",
    ],
  },
];

interface Skill {
  id: number;
  title: string;
  skills: string[];
}
export const skills: Skill[] = [
  {
    id: 1,
    title: "Web Design",
    skills: [
      "UI/UX Design",
      "Responsive Design",
      "Wireframing",
      "User Research",
    ],
  },
  {
    id: 2,
    title: "Frontend",
    skills: ["Javascript", "ReactJS", "NextJS", "CSS3"],
  },
  {
    id: 3,
    title: "Backend",
    skills: ["NodeJs", "MondoDB", "ExpressJS", "Vercel"],
  },
  {
    id: 4,
    title: "Soft Skills",
    skills: [
      "Effective communication",
      "Collaboration",
      "Commitment",
      "Leadership",
    ],
  },
];
