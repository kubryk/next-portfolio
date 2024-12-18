'use client'
import Container from "./Container";
import Image from "next/image";
import { delay, motion } from "framer-motion"
import { MButton } from "./ui/MButton";
import { NavigationContext } from "@/context/NavigationContext";
import { useContext } from "react";
// import { useTranslation } from "react-i18next";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';


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
    const translate = useTranslations('Hero');


    return (
        <section ref={sections?.find(section => section.name === 'About')?.ref} className="h-screen p">
            <Container className="flex flex-col items-center pt-40 md:pt-20 w-full md:flex-row md:gap-5 md:justify-evenly">

                <motion.div
                    className="flex flex-col gap-3 p-3"
                    variants={textVariants}
                    animate='visible'
                    initial='hidden'
                >
                    <motion.h1
                        variants={textVariants}
                        custom={1}
                        className="xsm:text-center sm:text-center md:text-left text-[50px] font-extrabold xsm:text-4xl sm:text-5xl md:text-5xl lg:text-6xl"
                    >
                        {translate('name')}
                    </motion.h1>
                    <motion.h2 variants={textVariants} custom={2} className="xsm:text-center sm:text-center md:text-left text-[20px] font-extrabold uppercase xsm:text-lg">
                        {translate('profession')}
                    </motion.h2>
                    <motion.p variants={textVariants} custom={3} className="xsm:text-center sm:text-center md:text-left max-w-[300px] font-bold">
                        {translate('description')}
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
                        {translate('button')}
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