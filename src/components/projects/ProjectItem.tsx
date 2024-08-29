import { motion } from "framer-motion";
import Link from "next/link"
import { ForwardedRef, forwardRef } from "react";

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
            className="flex flex-col gap-1">
            <div className=" w-[300px] h-[300px] bg-slate-500 rounded-xl shadow-2xl">
                {/* <Image
                    className=" rounded-xl"
                    src={project.image}
                    alt="My project"
                    width={300}
                    height={300}
                /> */}
            </div>
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-sm max-w-[300px]">{project.description}</p>
            <span className="flex gap-3 text-sm">
                <Link href={project.github}>Github</Link>
                <Link href={project.view}>View</Link>
            </span>
        </li>
    )
}

export const MProjectItem = motion(forwardRef(ProjectItem));