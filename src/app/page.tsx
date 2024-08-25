'use client'
import Contact from "@/custom-components/Contact";
import Header from "@/custom-components/Header";
import Preview from "@/custom-components/Preview";
import Projects from "@/custom-components/Projects";
import Skills from "@/custom-components/Skills";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main >
        <Header />
        <Preview />
        {/* <Projects /> */}
        <Skills />
        <Contact />
      </main>
    </QueryClientProvider>
  );
}
