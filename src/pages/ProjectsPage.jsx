import Container from "../components/Container";
import Heading from "../components/Heading";
import Projects from "../components/Projects";
import SubHeading from "../components/SubHeading";
import { projects } from "../data/projectData";

export default function PorjectsPage() {
    return (
        <>
            <Container className="min-h-screen p-4 md:p-10 bg-white rounded-lg">
                <Heading>Projects</Heading>
                <SubHeading>Here’s a collection of projects I've built that showcase my experience in front-end development, backend systems, and real-time applications. From collaborative tools to scalable backend services, each project reflects my passion for building impactful, production-grade software.</SubHeading>
                <Projects data={projects} layout="md:grid-cols-2" />
            </Container>
        </>
    )
}