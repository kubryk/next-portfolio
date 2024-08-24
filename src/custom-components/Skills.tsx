import Container from "./Container";

import { TbBrandTypescript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import { FaCss3Alt } from "react-icons/fa";
import { RiHtml5Fill } from "react-icons/ri";
import { BsFiletypeScss } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

import { BiLogoGit } from "react-icons/bi";
import { SiReacthookform } from "react-icons/si";

import { SiReactquery } from "react-icons/si";
import { SiRedux } from "react-icons/si";

const Skills = () => {
    return (
        <section className="h-auto pt-[10px] pb-[150px]">
            <Container>
                <div className="flex flex-col items-center gap-14">
                    <h2 className="text-3xl font-bold text-center uppercase">Technologies</h2>
                    <ul className="grid xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-7 lg:grid-rows-2 gap-5">
                        <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center ">
                            <TbBrandTypescript className=" text-cyan-400" size={50} />
                        </li>
                        <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center ">
                            <FaNodeJs className=" text-green-500" size={50} />
                        </li>
                        <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center ">
                            <RiReactjsLine className=" text-cyan-400" size={50} />
                        </li>
                        <li className=" w-[100px] h-[100px] border-[1px] rounded-md flex justify-center items-center">
                            <SiNextdotjs size={50} />
                        </li>
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
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}

export default Skills;