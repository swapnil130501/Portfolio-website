import Projects from "../components/Projects";
import SubHeading from "../components/SubHeading";
import { projects } from "../data/projectData";
import Heading from "../components/Heading";
import Container from "../components/Container";
import Blogs from "../components/Blogs";
import { blogs } from "../data/blogData";
import FeaturedJob from "../components/FeaturedJob";
import { IconDownload } from "@tabler/icons-react";
import GetInTouch from "../components/GetInTouch";

export default function Home() {
    return (
        <Container className="min-h-screen p-4 md:p-10 bg-white rounded-lg">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Heading>Swapnil Lohani</Heading>
                    <span className="border border-neutral-200 dark:border-neutral-600 rounded-full px-3 py-2 text-sm text-neutral-500 dark:text-neutral-300">
                        Software Developer
                    </span>
                </div>
                <a href="/Swapnil_Lohani_s_Resume.pdf" download className="flex items-center gap-2 bg-neutral-800 dark:bg-neutral-100 text-white dark:text-neutral-800 text-sm px-4 py-2 rounded-md hover:bg-neutral-900 dark:hover:bg-neutral-200 transition">
                    <IconDownload /> Resume
                </a>
            </div>
            <SubHeading> I’m a frontend engineer who enjoys turning ideas into interactive, accessible, and pixel-perfect web experiences. I specialize in building responsive user interfaces with React and Tailwind CSS, and I care deeply about performance, usability, and clean design. Whether it’s crafting smooth animations, implementing complex state logic, or collaborating with backend teams — I love building UI that just feels right.</SubHeading>
            <Projects data={projects?.slice(1, 4)} layout="md:grid-cols-3" />
            <Blogs data={blogs?.slice(0, 2)} />
            <FeaturedJob />
            <GetInTouch />
        </Container>
    );
}
