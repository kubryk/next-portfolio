import Container from "./Container";

import { TbBrandTypescript } from "react-icons/tb";
import { RiReactjsLine, RiTailwindCssFill, RiHtml5Fill } from "react-icons/ri";
import { FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiReacthookform, SiReactquery, SiRedux } from "react-icons/si";
import { BiLogoPostgresql, BiLogoGit } from "react-icons/bi";
import { BsFiletypeScss } from "react-icons/bs";

import { useContext } from "react";
import { NavigationContext } from "@/context/NavigationContext";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";


const skills = [
    { key: 1, icon: <TbBrandTypescript className=" text-cyan-400" size={50} /> },
    { key: 2, icon: <FaNodeJs className=" text-green-500" size={50} /> },
    { key: 3, icon: <RiReactjsLine className=" text-cyan-400" size={50} /> },
    { key: 4, icon: <SiNextdotjs size={50} /> },
    { key: 5, icon: <RiHtml5Fill className=" text-orange-600" size={50} /> },
    { key: 6, icon: <FaCss3Alt className=" text-cyan-500" size={50} /> },
    { key: 7, icon: <BsFiletypeScss className=" text-pink-400" size={50} /> },
    { key: 8, icon: <RiTailwindCssFill className=" text-cyan-400" size={50} /> },
    { key: 9, icon: <SiRedux className=" text-purple-600" size={50} /> },
    { key: 10, icon: <SiReactquery className=" text-red-500" size={50} /> },
    { key: 11, icon: <BiLogoPostgresql className=" text-cyan-400" size={50} /> },
    { key: 12, icon: <SiMongodb className=" text-green-500" size={50} /> },
    { key: 13, icon: <BiLogoGit className=" text-red-700" size={50} /> },
    { key: 14, icon: <SiReacthookform className=" text-pink-600" size={50} /> }
]

const titleVariants = {
    hidden: {
        opacity: 0,
        y: 100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            delay: 0.8
        }
    }
}

const skillsVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            duration: 0.5,
            staggerChildren: 0.2
        }
    }
}

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    hover: {
        scale: 1.1
    }
}

const Skills = () => {
    const sections = useContext(NavigationContext);
    const translation = useTranslations('Skills');

    return (
        <section ref={sections?.find(section => section.name === 'Skills')?.ref}>
            <Container className="flex flex-col items-center gap-6">
                <motion.h2
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center uppercase"
                >
                    {translation('title')}
                </motion.h2>
                <motion.ul
                    variants={skillsVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 gap-5"
                >
                    {skills.map(skill => {
                        return (
                            <motion.li
                                variants={childVariants}
                                key={skill.key}
                                className=" w-[100px] h-[100px] border-[2px] rounded-md flex justify-center items-center"
                            >
                                {skill.icon}
                            </motion.li>
                        )
                    })}
                </motion.ul>
            </Container>
        </section>
    );
}

export default Skills;