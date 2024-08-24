import Container from "./Container";

const Skills = () => {
    return (
        <section className="h-screen w-screen">
            <Container>
                <h2>Skills</h2>
                <ul className="grid grid-cols-3 gap-5">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Python</li>
                </ul>
            </Container>
        </section>
    );
}

export default Skills;