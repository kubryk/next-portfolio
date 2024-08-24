import Contact from "@/custom-components/Contact";
import Header from "@/custom-components/Header";
import Preview from "@/custom-components/Preview";
import Projects from "@/custom-components/Projects";
import Skills from "@/custom-components/Skills";
import Navigation from "@/custom-components/test/Navigation";


export default function Home() {
  return (
    <main >
      <Header />
      <Preview />
      {/* <Projects /> */}
      <Skills />
      <Contact />
    </main>
  );
}
