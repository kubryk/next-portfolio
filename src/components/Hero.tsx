'use client'
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { delay, motion } from "framer-motion"
import { MButton } from "./ui/Button";
import { NavigationContext } from "@/context/NavigationContext";
import { useContext } from "react";

const textVariants = {
    hidden: {
        opacity: 0,
        x: -100
    },
    visible: (custom: number) => ({
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            delay: custom * 0.2
        }
    })
}

const heroVariants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            delay: 0.8
        }
    }
}

const Hero = () => {
    const sections = useContext(NavigationContext);

    return (
        <section ref={sections?.find(section => section.name === 'About')?.ref} className="h-screen p">
            <Container className="flex flex-col items-center pt-20 w-full md:flex-row md:gap-5 md:justify-evenly">

                <motion.div
                    className="flex flex-col gap-3 p-3"
                    variants={textVariants}
                    animate='visible'
                    initial='hidden'
                >
                    <motion.h1 variants={textVariants} custom={1} className="xsm:text-center sm:text-center md:text-left text-[50px] font-extrabold xsm:text-4xl sm:text-5xl md:text-5xl lg:text-6xl">Hi, it&apos;s <span className=" text-indigo-500">Yaroslav</span></motion.h1>
                    <motion.h2 variants={textVariants} custom={2} className="xsm:text-center sm:text-center md:text-left text-[20px] font-extrabold uppercase xsm:text-lg">I&apos;m a <span className=" text-indigo-500">Full Stack Developer</span></motion.h2>
                    <motion.p variants={textVariants} custom={3} className="xsm:text-center sm:text-center md:text-left max-w-[300px] font-bold">
                        Driven by a passion for developing modern React web applications.
                        {/* With a passion for developing modern React web apps for commercial businesses. */}
                    </motion.p>
                    <MButton
                        variants={textVariants}
                        custom={4}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        onClick={() => {
                            const contactSection = sections?.find(section => section.name === 'Contact')?.ref;
                            if (contactSection && contactSection.current) {
                                const y = contactSection.current.getBoundingClientRect().top + window.scrollY - 70;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                            }
                        }}
                    >
                        Hire me
                    </MButton>
                </motion.div>
                <motion.div
                    variants={heroVariants}
                    animate='visible'
                    initial='hidden'
                >
                    <Image src="/my-photo.png" alt="My Photo" width={300} height={300} />
                </motion.div>


                {/* <div className="relative ">
                    <svg className=" w-[340px] h-[340px]">
                        <path className=" fill-transparent " id="curve" d=" M 320 170 A 150 150 0 1 1 320 165" />
                        <text className="origin-center animate-spin duration-10000 transition-colors">
                            <textPath className="dark:fill-white" href="#curve">
                                HTML  CSS  SCSS  JavaScript  Typescript  React  Next.js  Node.js  Express  MongoDB  PostgreSQL  Redux  Tailwind  SEO
                            </textPath>
                        </text>
                    </svg>
                    <Image className="absolute top-[30px] left-[30px]" src="/my-photo.png" alt="My Photo" width={280} height={280} />
                </div> */}

            </Container>
        </section >
    );
}

export default Hero;