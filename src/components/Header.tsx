'use client'
import { useContext, useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { NavigationContext } from "@/context/NavigationContext";

const navLinks = [{
    name: 'About',

}]

const Header = () => {
    const sections = useContext(NavigationContext)
    const [nav, setNav] = useState(false);

    const handleScroll = () => window.scrollY >= 62 ? setNav(true) : setNav(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav className={cn('py-6 fixed w-screen backdrop-blur-md border-b-[1px] duration-1000 z-50', nav ? 'py-2' : '')}>
                <div className="flex gap-6 justify-center items-center">
                    <ul className="flex justify-center gap-6 text-[15px] uppercase">
                        {sections && sections.map(section => {
                            return (
                                <li key={section.name} className=" cursor-pointer" onClick={() => {
                                    if (section.ref.current) {
                                        const y = section.ref.current.getBoundingClientRect().top + window.scrollY - 70;
                                        window.scrollTo({ top: y, behavior: 'smooth' });
                                    }
                                }}>{section.name}</li>
                            )
                        })}
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;