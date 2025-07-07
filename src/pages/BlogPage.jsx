import Blog from "../components/Blogs";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import { blogs } from "../data/blogData";

export default function BlogPage() {
    return (
        <>
            <Container className="min-h-screen p-4 md:p-10 bg-white rounded-lg">
                <Heading>Blogs</Heading>
                <SubHeading></SubHeading>
                <Blog data={blogs} />
            </Container>
        </>
    )
}