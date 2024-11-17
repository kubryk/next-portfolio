'use client'
import { useContext, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { NavigationContext } from "@/context/NavigationContext";
import { motion } from 'framer-motion';
// import { Language } from "./Language";
// import { useRouter } from "next/router";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Language } from "./Language";

const Header = () => {
    const sections = useContext(NavigationContext)
    const [nav, setNav] = useState(false);
    const translate = useTranslations("Navigation");


    const handleScroll = () => window.scrollY >= 62 ? setNav(true) : setNav(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}

                className={cn('py-6 fixed w-screen backdrop-blur-md border-b-[1px] duration-1000 z-50', nav ? 'py-2' : '')}
            >
                <div className="flex gap-6 justify-center items-center">
                    <ul className="flex justify-center gap-4 md:gap-6 text-[15px] uppercase">
                        {sections && sections.map(section => {
                            return (
                                <li key={section.name} className=" cursor-pointer" onClick={() => {
                                    if (section.ref.current) {
                                        const y = section.ref.current.getBoundingClientRect().top + window.scrollY - 70;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }}>
                                    {translate(section.name)}
                                </li>
                            )
                        })}
                    </ul>
                    <ThemeToggle />
                    <Language />
                </div>
            </motion.nav>
        </header>
    );
}

export default Header;


