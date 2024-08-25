'use client'
import Contact from "@/components/contact/Contact";
import Header from "@/components/Header";
import Preview from "@/components/Preview";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
