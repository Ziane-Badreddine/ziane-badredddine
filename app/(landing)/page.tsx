import React from "react";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/services/Services";
import Projects from "@/components/home/projects/Projects";
import Education from "@/components/home/education/Education";
import Skills from "@/components/home/skills/Skills";
import Contact from "@/components/home/contact/Contact";

export default function page() {
  return (
    <main className="w-full h-full flex-1">
      <Hero />
      <Services />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
}
