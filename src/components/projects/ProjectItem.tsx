import { motion } from "framer-motion";
import Link from "next/link"
import { ForwardedRef, forwardRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface IProject {
    name: string;
    description: string;
    github: string;
    view: string;
    image: string;
}

const ProjectItem = ({ project, index }: { project: IProject, index: number }, ref: ForwardedRef<HTMLLIElement>) => {
    const translate = useTranslations('Projects');

    return (
        <li
            ref={ref}
            className="flex flex-col gap-4 border-[2px] dark:bg-transparent dark:border-[2px] rounded-xl p-4 justify-between shadow-xl w-[350px]"
        >
            <div className="flex flex-col gap-1">
                <div className="relative flex items-center justify-center w-full h-[200px] overflow-hidden">
                    <Image
                        className=" rounded-xl object-cover"
                        fill
                        src={project.image}
                        alt="My project"
                    />
                </div>
                <h3 className="text-xl font-bold">{translate(`items.${index}.name`)}</h3>
                <p className="text-sm max-w-[300px]">{translate(`items.${index}.description`)}</p>
            </div>

            <span className="flex gap-3 text-sm">
                <Link className=" duration-500 font-extrabold bg-indigo-600 p-2 rounded-xl text-indigo-100 w-1/2 text-center" target='_blank' href={project.github}>Github</Link>
                <Link className=" duration-500 font-extrabold bg-indigo-600 p-2 rounded-xl text-indigo-100 w-1/2 text-center" target='_blank' href={project.view}>{translate('liveBtn')}</Link>
            </span>

        </li>
    )
}

export const MProjectItem = motion(forwardRef(ProjectItem));