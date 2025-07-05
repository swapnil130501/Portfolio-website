import Projects from "../components/Projects";
import { projects } from "../data/projectData";

export default function Home() {
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-800">Swapnil Lohani</h1>
      <p className="text-neutral-500 text-sm md:text-base pt-4 max-w-lg">
        I'm a software engineer with a passion for creating efficient and scalable web applications. Experienced in designing and implementing robust APIs, optimizing database performance, and ensuring seamless integration with front-end systems. Proficient in a wide range of programming languages and frameworks, including Express, Node.js, and Java script.
      </p>

      <Projects data={projects?.slice(1, 4)} layout="md:grid-cols-3" />
    </>
  );
}
