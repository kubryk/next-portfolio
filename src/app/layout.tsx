import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavigationContextProvider from "@/context/NavigationContext";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Yaroslav's Portfolio",
  description: "Full Stack Web Developer Personal Portfolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NavigationContextProvider>
        <body className={ubuntu.className}>
          <Header />
          {children}
          <Footer />
          <SpeedInsights />
        </body>
      </NavigationContextProvider>

    </html>
  );
}
