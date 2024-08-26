'use client'
import Contact from "@/components/contact/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Hero />
        <div className="flex flex-col xsm:gap-10 md:gap-28">
          <Projects />
          <Technologies />
          <Contact />
        </div>
      </main>
    </QueryClientProvider>
  );
}
