import Projects from "../components/Projects";
import { projects } from "../data/projectData";

export default function PorjectsPage() {
    return (
        <>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-800">Projects</h1>
            <p className="text-neutral-500 text-sm md:text-base pt-4 max-w-lg">
                I'm a passionate software developer dedicated to craft elegant solutions for complex problems. With expertise in
                full stack development, I enjoy building user-centric applications that make a difference.
            </p>

            <Projects data={projects} layout="md:grid-cols-2" />
        </>
    )
}