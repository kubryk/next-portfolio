'use client'
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Hero />
        <div className="flex flex-col xsm:gap-10 md:gap-28">
          <Projects />
          <Skills />
          <Contact />
        </div>
      </main>
    </QueryClientProvider>
  );
}
