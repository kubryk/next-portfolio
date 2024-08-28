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


const skills = [,
    <TbBrandTypescript className=" text-cyan-400" size={50} />,
    <FaNodeJs className=" text-green-500" size={50} />,
    <RiReactjsLine className=" text-cyan-400" size={50} />,
    <SiNextdotjs size={50} />,
    <RiHtml5Fill className=" text-orange-600" size={50} />,
    <FaCss3Alt className=" text-cyan-500" size={50} />,
    <BsFiletypeScss className=" text-pink-400" size={50} />,
    <RiTailwindCssFill className=" text-cyan-400" size={50} />,
    <SiRedux className=" text-purple-600" size={50} />,
    <SiReactquery className=" text-red-500" size={50} />,
    <BiLogoPostgresql className=" text-cyan-400" size={50} />,
    <SiMongodb className=" text-green-500" size={50} />,
    <BiLogoGit className=" text-red-700" size={50} />,
    <SiReacthookform className=" text-pink-600" size={50} />
]

const Skills = () => {
    const sections = useContext(NavigationContext);

    return (
        <section ref={sections?.find(section => section.name === 'Skills')?.ref}>
            <Container className="flex flex-col items-center gap-6">

                <h2 className="text-3xl font-bold text-center uppercase">Skills</h2>
                <ul className="grid xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 gap-5">

                    {skills.map((skill, index) => {
                        return (
                            <motion.li
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: index * 0.1 }}
                                key={index}
                                className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center"
                            >
                                {skill}
                            </motion.li>
                        )
                    })}

                    {/* <motion.li
                        initial={{ x: '-100vh' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}

                        className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center "
                    >
                        <TbBrandTypescript className=" text-cyan-400" size={50} />
                    </motion.li>
                    <motion.li
                        initial={{ x: '-50vh' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center "
                    >
                        <FaNodeJs className=" text-green-500" size={50} />
                    </motion.li>


                    <motion.li
                        initial={{ x: '-50vh' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center "
                    >
                        <RiReactjsLine className=" text-cyan-400" size={50} />
                    </motion.li>

                    <motion.li
                        initial={{ x: '-50vh' }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center"
                    >
                        <SiNextdotjs size={50} />
                    </motion.li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center ">
                        <RiHtml5Fill className=" text-orange-600" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center ">
                        <FaCss3Alt className=" text-cyan-500" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center ">
                        <BsFiletypeScss className=" text-pink-400" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                        <RiTailwindCssFill className=" text-cyan-400" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                        <SiRedux className=" text-purple-600" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                        <SiReactquery className=" text-red-500" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                        <BiLogoPostgresql className=" text-cyan-400" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                        <SiMongodb className=" text-green-500" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                        <BiLogoGit className=" text-orange-600" size={50} />
                    </li>
                    <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                        <SiReacthookform className=" text-pink-600" size={50} />
                    </li> */}
                </ul>
            </Container>
        </section>
    );
}

export default Skills;