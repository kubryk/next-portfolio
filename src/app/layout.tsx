import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
