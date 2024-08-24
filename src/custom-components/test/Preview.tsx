import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Navigation from "./Navigation";
import Footer from "./Footer";


const Preview = () => {
    return (
        <section className=" w-screen h-screen bg-slate-300 sm:p-[50px] md:p-[50px] lg:px-[300px] lg:py-[200px]">
            <div className=" w-full h-full bg-white rounded-2xl p-5 shadow-2xl">
                {/* <Navigation /> */}
                <div className="flex flex-col items-center justify-evenly w-full md:flex-row md:gap-5 h-[90%]">

                    <div className="flex flex-col gap-3 items-center max-w-[300px] p-3">
                        <h1 className="text-[50px] text-4xl font-bold text-center uppercase md:text-6xl">Yaroslav Havryliuk</h1>
                        <h2 className="text-[20px] text-center font-thin uppercase">Full Stack Developer</h2>
                        <span className="flex gap-3">
                            <Link href="/"><FaGithubSquare size={35} /></Link>
                            <Link href="/"><FaLinkedin size={35} /></Link>
                        </span>
                        <p className=" text-center">With a passion for developing modern React web apps for commercial businesses.</p>
                    </div>

                    <div className=" relative">
                        <svg className=" w-[400px] h-[400px]">
                            <path className=" fill-transparent" id='curve' d=" M 380 200 A 180 180 0 1 1 380 194" />
                            <text className="origin-center animate-spin duration-10000">
                                <textPath href="#curve">
                                    ====== | HTML | CSS | SCSS | JavaScript | Typescript | React | Next.js | Node.js | Express | MongoDB | PostgreSQL | Redux | Tailwind CSS | ===== MODERN APP
                                </textPath>
                            </text>
                        </svg>
                        <Image className="absolute top-[35px] left-[35px]" src="/my-photo.png" alt="My Photo" width={330} height={330} />
                    </div>

                </div>
                {/* <Footer /> */}
            </div>
        </section>
    )
}

export default Preview;