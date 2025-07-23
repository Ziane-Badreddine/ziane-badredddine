import React from "react";
import Header from "./_components/Header";
import Hero from "./_components/hero/Hero";
import Services from "./_components/services/Services";
import Projects from "./_components/projects/Projects";
import Education from "./_components/education/Education";
import Skills from "./_components/skills/Skills";
import Contact from "./_components/contact/Contact";
import Footer from "./_components/footer";

export default function page() {
  return (
    <div className="bg-background text-foreground  flex flex-col items-center justify-center">
      <Header />
      <main className="w-full h-full flex-1">
        <Hero />
        <Services />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
