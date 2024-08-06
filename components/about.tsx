/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Communications from UC Santa Barbara</span>, and a short stint in tech sales, I realized I was a builder at heart and decided to pursue my
        passion for programming. Initially, I worked as a freelance front-end engineer before enrolling in a software engineering immersive to upskill to{" "}
        <span className="font-medium">full-stack</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">chase</span> the
        feeling of finally figuring out a solution to a problem and i'm the type of person who can't stop thinking about a problem until I find a solution. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Angular. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        engineer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I'm either outdoors spending time with loved ones or at the gym lifting and playing basketball. I'm also passionate about{" "}
        <span className="font-medium">building electric bikes and skateboards</span>. I am currently
        learning about{" "}
        <span className="font-medium">battery technology</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
