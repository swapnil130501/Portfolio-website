import Projects from "../components/Projects";
import SubHeading from "../components/SubHeading";
import { projects } from "../data/projectData";
import Heading from "../components/Heading";

export default function Home() {
    return (
        <>
            <Heading>Swapnil Lohani</Heading>
            <SubHeading> I’m a frontend engineer who enjoys turning ideas into interactive, accessible, and pixel-perfect web experiences. I specialize in building responsive user interfaces with React and Tailwind CSS, and I care deeply about performance, usability, and clean design. Whether it’s crafting smooth animations, implementing complex state logic, or collaborating with backend teams — I love building UI that just feels right.</SubHeading>
            <Projects data={projects?.slice(1, 4)} layout="md:grid-cols-3" />
        </>
    );
}
