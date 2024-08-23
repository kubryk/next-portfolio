import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaAnglesDown } from "react-icons/fa6";

const Preview = () => {
    return (
        <section className=" h-[calc(100vh-46px)]">
            <Container>
                <div className="flex flex-col items-center justify-between h-full">

                    <div className="flex flex-col items-center justify-evenly w-full md:flex-row md:gap-5 h-[90%]">

                        <div className="flex flex-col gap-3 items-center max-w-[300px] p-3">
                            <h1 className="text-[50px] text-4xl font-bold text-center uppercase md:text-6xl">Yaroslav Havryliuk</h1>
                            <h2 className="text-[20px] text-center font-thin uppercase">Full Stack Web Developer</h2>
                            <span className="flex gap-3">
                                <Link href="/"><FaGithubSquare size={35} /></Link>
                                <Link href="/"><FaLinkedin size={35} /></Link>
                            </span>
                            <p className=" text-center">With a passion for developing modern React web apps for commercial businesses.</p>
                        </div>

                        <div className="w-[300px] h-[300px]">
                            <Image src="/my-photo.png" alt="My Photo" width={350} height={350} />
                        </div>
                    </div>

                    <div className=" flex items-center justify-center w-full">
                        <FaAnglesDown className=" animate-bounce duration-350 " size={55} />
                    </div>
                </div>

            </Container>
        </section>
    );
}

export default Preview;