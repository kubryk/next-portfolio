import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
import { useContext } from "react";
import { NavigationContext } from "@/context/NavigationContext";
import { motion } from "framer-motion";
import { MProjectItem } from "./ProjectItem";
import { useTranslations } from "next-intl";


const myProjects = [
    {
        name: 'Personal Portfolio',
        description: 'Personal portfolio website built with React, Typescript, Tailwind CSS, Reach Hook Form.',
        github: 'https://github.com/kubryk/next-portfolio',
        view: '/',
        image: '/next-portfolio.jpg'
    },
    {
        name: 'Content Managment System',
        description: 'CMS built with Next.js, React, Typescript, Tailwind CSS, Redux, React Hook Form, Zod, shadcn/ui and Supabase.',
        github: 'https://github.com/kubryk/nextjs-supabase-CMS',
        view: 'https://nextjs-supabase-cms.vercel.app',
        image: '/next-cms.jpg'
    },
    // {
    //     name: 'Rust Game Server Website',
    //     description: 'E-commerce website built with Next.js, React, Typescript, Tailwind CSS, TanStack Query, React Hook Form, Zod, shadcn/ui and MongoDB.',
    //     github: '/',
    //     view: '/',
    //     image: '/next-rust.jpg'
    // },
    {
        name: 'Wordpress Headless Dentist Website',
        description: 'Wordpress headless dentist website built with Next.js, React, Three.js, React Three Fiber, Typescript, Tailwind CSS, shadcn/ui and Framer Motion',
        github: '/',
        view: 'next-dentist-two.vercel.app',
        image: '/next-dentist.jpg'
    }
];


const projectsVariants = {
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
    },
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

const Projects = () => {
    const sections = useContext(NavigationContext);
    const translate = useTranslations('Projects');

    return (
        <section
            ref={sections?.find(section => section.name === 'Projects')?.ref}
        >
            <Container className=" flex flex-col items-center gap-6">
                <motion.h2
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center uppercase">{translate('title')}</motion.h2>
                <motion.ul
                    variants={projectsVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-10 py-4 text-[20px]"
                >
                    {myProjects && myProjects.map((project, index) => {
                        return (
                            <MProjectItem
                                index={index}
                                variants={childVariants}
                                key={project.name}
                                project={project}
                            />
                        )
                    })}
                </motion.ul>
            </Container>
        </section>
    );
}

export default Projects;