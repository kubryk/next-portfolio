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
      <main className="flex flex-col gap-20">
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </QueryClientProvider>
  );
}
