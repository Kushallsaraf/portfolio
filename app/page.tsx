import About from "@/app/components/about";
import Experience from "@/app/components/experience";
import Projects from "@/app/components/projects";
import Resume from "@/app/components/resume";
import Contact from "@/app/components/contact";

export default function Home() {
  return (
    <main>
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
