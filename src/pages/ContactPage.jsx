import Contact from "../components/Contact";
import Container from "../components/Container";
import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading";

export default function ContactPage() {
    return (
        <Container className="min-h-screen p-4 md:p-10 bg-white rounded-lg">
            <Heading>
                Get in touch
            </Heading>
            <SubHeading>
                Whether you want to collaborate on a project, have a cool idea to share, or just want to talk about watches — I'm all ears!
            </SubHeading>
            <Contact />
        </Container>
    )
}