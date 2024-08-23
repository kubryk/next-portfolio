import Container from "./Container";

const Projects = () => {
    return (
        <section className="bg-blue-300">
            <Container>
                <h2 className="text-[30px]">Projects</h2>
                <ul className="flex gap-5 py-4 text-[20px]">
                    <li><a href="/">Project 1</a></li>
                    <li><a href="/">Project 2</a></li>
                    <li><a href="/">Project 3</a></li>
                    <li><a href="/">Project 4</a></li>
                </ul>
            </Container>
        </section>
    );
}

export default Projects;