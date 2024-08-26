'use client'
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
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
                        <li><Link href="/">About</Link></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
}

export default Header;