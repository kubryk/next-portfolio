'use client'
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(false);

    useEffect(() => {

        if (localStorage.getItem("theme") === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setDarkTheme(true);
        }
    }, []);

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkTheme]);

    return (
        <>
            {darkTheme ?
                <MdSunny className=" cursor-pointer" onClick={() => setDarkTheme(!darkTheme)} size={25} /> :
                <IoIosMoon className=" cursor-pointer" onClick={() => setDarkTheme(!darkTheme)} size={25} />
            }
        </>
    )
}

export default ThemeToggle;