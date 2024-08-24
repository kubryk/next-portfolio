'use client'
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const [nav, setNav] = useState(false);

    const handleScroll = () => {
        if (window.scrollY >= 62) {
            setNav(true);
        } else {
            setNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav className={nav ? ' py-2 fixed w-screen backdrop-blur-md border-b-[1px] duration-1000' : 'py-6 fixed w-screen backdrop-blur-md border-b-[1px] duration-1000'}>
                <ul className="flex justify-center gap-8 text-[18px] uppercase">
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Skills</a></li>
                </ul>
                {/* <ThemeToggle /> */}
            </nav>

        </header>
    );
}

export default Header;