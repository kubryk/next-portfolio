'use client'
const Header = () => {

    // const handleScroll = () => {
    //     if (window.scrollY >= 62) {
    //         setNav(true);
    //     } else {
    //         setNav(false);
    //     }
    // }

    // useEffect(() => {
    //     console.log(window.screenY)

    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     }
    // }, []);

    return (
        <header className=" h-[46px]">
            <nav className='fixed w-screen bg-gray-700'>
                <ul className="flex justify-center gap-8 py-2 text-[18px] text-white uppercase">
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Skills</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;