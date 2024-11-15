import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavigationContextProvider from "@/context/NavigationContext";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';


const ubuntu = Ubuntu({ subsets: ["latin"], weight: ['400'] });

export const metadata: Metadata = {
  title: "Yaroslav's Portfolio - Full Stack Web Developer",
  description: "Full Stack Web Developer React, Node.js, TypeScript, Next.js, GraphQL, MongoDB, PostgreSQL, Docker",
};


export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={ubuntu.className}>
        <NavigationContextProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </NavigationContextProvider>
      </body>
    </html>
  );
}
