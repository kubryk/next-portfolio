import Link from "next/link";
import Container from "./Container";
import Image from "next/image";


const myProjects = [{
    name: 'Personal Portfolio',
    description: 'Personal portfolio website built with React, Typescript, Tailwind CSS, Reach Hook Form.',
    github: '/',
    view: '/',
    image: '/'
},
{
    name: 'Content Managment System',
    description: 'CMS built with Next.js, React, Typescript, Tailwind CSS, Redux, React Hook Form, Zod, shadcn/ui and Supabase.',
    github: '/',
    view: '/',
    image: '/'
},
{
    name: 'E-commerce',
    description: 'E-commerce website built with Next.js, React, Typescript, Tailwind CSS, TanStack Query, React Hook Form, Zod, shadcn/ui and MongoDB.',
    github: '/',
    view: '/',
    image: '/'
},
    // {
    //     name: 'Rust Game Server Website',
    //     description: 'Game server website ',
    //     github: '/',
    //     view: '/',
    //     image: '/'
    // },
];


const Projects = () => {
    return (
        <section>
            <Container className=" flex flex-col items-center gap-6">
                <h2 className="text-3xl font-bold text-center uppercase">Projects</h2>
                <ul className="flex flex-wrap justify-center gap-4 py-4 text-[20px]">
                    {myProjects && myProjects.map(project => {
                        return (
                            <li className="flex flex-col gap-1">
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
                    })}
                </ul>
            </Container>
        </section>
    );
}

export default Projects;