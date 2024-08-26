import Container from "./Container";
import { FaInstagram, FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" pt-[100px] pb-[50px]">
            <Container className="flex flex-col gap-4 justify-center items-center">

                <div className="flex gap-4">
                    <a href="/"><FaInstagram size={30} /></a>
                    <a href="/"><FaFacebook size={30} /></a>
                    <a href="/"><FaXTwitter size={30} /></a>
                    <a href="/"><FaGithubSquare size={30} /></a>
                    <a href="/"><FaLinkedin size={30} /></a>
                </div>
                <p className=" text-sm">© 2024 Yaroslav Havryliuk. All rights reserved.</p>
            </Container>
        </footer>
    )
}
export default Footer;