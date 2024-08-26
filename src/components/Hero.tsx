'use client'
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"

const Hero = () => {
    return (
        // <section className="h-screen sm:pt-[80px] xsm:pt-[80px]">
        <section className="h-screen">

            <Container>
                <div className="flex flex-col items-center justify-evenly w-full h-[90%] md:flex-row md:gap-5">

                    <div className="flex flex-col gap-3 p-3">
                        <h1 className="xsm:text-center sm:text-center md:text-left text-[50px] font-extrabold xsm:text-4xl sm:text-5xl md:text-5xl lg:text-6xl">Hi, it's <span className=" text-indigo-500">Yaroslav</span></h1>
                        <h2 className="xsm:text-center sm:text-center md:text-left text-[20px] font-extrabold uppercase xsm:text-lg">I'm a <span className=" text-indigo-500">Full Stack Developer</span></h2>
                        <p className="xsm:text-center sm:text-center md:text-left max-w-[300px] font-bold">With a passion for developing modern React web apps for commercial businesses.</p>
                        <span className="flex gap-3 xsm:justify-center sm:justify-center md:justify-start">
                            <Link href="/"><FaGithubSquare size={35} /></Link>
                            <Link href="/"><FaLinkedin size={35} /></Link>
                        </span>
                    </div>

                    <div className="relative ">
                        <svg className=" w-[340px] h-[340px]">
                            <path className=" fill-transparent " id="curve" d=" M 320 170 A 150 150 0 1 1 320 165" />
                            <text className="origin-center animate-spin duration-10000 transition-colors">
                                <textPath className="dark:fill-white" href="#curve">
                                    | HTML | CSS | SCSS | JavaScript | Typescript | React | Next.js | Node.js | Express | MongoDB | PostgreSQL | Redux | Tailwind | SEO |
                                </textPath>
                            </text>
                        </svg>
                        <Image className="absolute top-[30px] left-[30px]" src="/my-photo.png" alt="My Photo" width={280} height={280} />
                    </div>

                </div>
            </Container>
        </section>
    );
}

export default Hero;