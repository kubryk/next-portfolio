import { motion } from "framer-motion";
import Link from "next/link"
import { ForwardedRef, forwardRef } from "react";
import Image from "next/image";

interface IProject {
    name: string;
    description: string;
    github: string;
    view: string;
    image: string;
}

const ProjectItem = ({ project }: { project: IProject }, ref: ForwardedRef<HTMLLIElement>) => {
    return (
        <li
            ref={ref}
            className="flex flex-col gap-4 border-[2px] dark:bg-transparent dark:border-[2px] rounded-xl p-4 justify-between shadow-xl"
        >
            <div className="flex flex-col gap-1">
                <div className="flex items-center justify-center">
                    <Image
                        className=" rounded-xl"
                        src={project.image}
                        alt="My project"
                        width={270}
                        height={300}
                    />
                </div>
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm max-w-[300px]">{project.description}</p>
            </div>

            <span className="flex gap-3 text-sm">
                <Link className=" duration-500 font-extrabold bg-indigo-600 p-2 rounded-xl text-indigo-100 w-1/2 text-center" target='_blank' href={project.github}>Github</Link>
                <Link className=" duration-500 font-extrabold bg-indigo-600 p-2 rounded-xl text-indigo-100 w-1/2 text-center" target='_blank' href={project.view}>View</Link>
            </span>

        </li>
    )
}

export const MProjectItem = motion(forwardRef(ProjectItem));