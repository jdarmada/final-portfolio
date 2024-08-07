import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import angulensImg from "../public/Angulens preview.jpg"
import portfolioImg from "../public/portfolioImg.png"
import sinilangan from "../public/sinilangan.png"


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
    
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance Front-End Developer",
    location: "Palm Springs, CA",
    description:
      "Collaborated with local businesses to build websites and web apps. I used React, HTML, CSS and MongoDB. Hosted on AWS.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2023",
  },
  {
    title: "Graduated from OS Labs Engineering Immersive",
    location: "Los Angeles, CA",
    description:
      "Enrolled in a full time immersive program to upskill to full stack engineering and to build my network.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Engineer",
    location: "San Francisco, CA",
    description:
      "Lead Engineer for an open-source developer tool called AnguLens.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
  {
    title: "Front-End Engineer - Indema",
    location: "Remote",
    description:
      "I'm now a Front-End Engineer for a company called Indema. I work with designers to create components and pages for their web app using React.",
    icon: React.createElement(FaReact),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sinilangan - Ecommerce",
    description:
      "Ecommerce site for a clothing brand. I used Next.js to build a custom front-end and Payload CMS for the client to manage products.",
    tags: ["React", "Next.js", "MongoDB", "Payload CMS", "GraphQL", "TypeScript"],
    imageUrl: sinilangan,
  },
  {
    title: "AnguLens",
    description:
      "Open-Source developer tool for Angular. It visualizes high-level data flow between components, minimizing the time for onboarding new team members and debugging.",
    tags: ["Angular", "TypeScript", "Klaw", "Visjs", "VSCode API"],
    imageUrl: angulensImg,
  },
  {
    title: "Money Muncher",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: portfolioImg,
  },{
    title: "Portfolio Site",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: portfolioImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Git",
  "Tailwind",
  "OAuth",
  "JWT",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
  "RESTful API",
  "Object-Oriented Programming",
] as const;
