import Projects from "../components/Projects";
import SubHeading from "../components/SubHeading";
import { projects } from "../data/projectData";
import Heading from "../components/Heading";

export default function Home() {
    return (
        <>
            <Heading>Swapnil Lohani</Heading>
            <SubHeading> I'm a software engineer with a passion for creating efficient and scalable web applications. Experienced in designing and implementing robust APIs, optimizing database performance, and ensuring seamless integration with front-end systems. Proficient in a wide range of programming languages and frameworks, including Express, Node.js, and Java script.</SubHeading>
            <Projects data={projects?.slice(1, 4)} layout="md:grid-cols-3" />
        </>
    );
}
