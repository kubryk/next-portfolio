'use client'
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(true);

    useEffect(() => {
        localStorage.getItem("theme") === "dark" ? setDarkTheme(true) : setDarkTheme(false);
    }, []);

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

        console.log(darkTheme)
    }, [darkTheme]);

    return (
        <button onClick={() => setDarkTheme(prev => !prev)}>
            Toggle Theme
        </button>
    )
}

export default ThemeToggle;