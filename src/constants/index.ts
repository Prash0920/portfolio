import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  internpe,
  aquascribe,
  
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
 
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

  
];

const experiences: TExperience[] = [

  {
    title: "Web Developer",
    companyName: "InternPe",
    icon: internpe,
    iconBg: "#383E56",
    date: "june 2022 - august 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 ];

const testimonials: TTestimonial[] = [
 
 
  {
    testimonial:
      "After Prashik optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Adhya chavan",
    designation: "H.R",
    company: "InternPe",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [

  {
    name: "smart irrigation system",
    description:
      "it is an fully automated website integrtaed with the iot for excellant farming",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "OpenWeatherAPI",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "ML",
        color: "yellow-text-gradient",
      }
    ],
    image: aquascribe,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
