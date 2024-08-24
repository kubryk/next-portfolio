import type { Metadata } from "next";
import { Inter, Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/custom-components/Header";
import Projects from "@/custom-components/Projects";
import Skills from "@/custom-components/Skills";
import Contact from "@/custom-components/Contact";

// const inter = Inter({ subsets: ["latin"] });
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Yaroslav Havryliuk",
  description: "Full Stack Web Developer Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
