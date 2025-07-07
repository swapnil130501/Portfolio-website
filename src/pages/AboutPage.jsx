import Container from "../components/Container";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Timeline from "../components/Timeline";
import { DraggableCardDemo } from "../components/ui/PolaroidCollection";

export default function About() {
    return (
        <Container className="min-h-screen p-4 md:p-10 bg-white rounded-lg">
            <Heading>
                About me
            </Heading>
            <SubHeading>
                 Outside of coding, I have a deep appreciation for craftsmanship — which might explain my obsession with mechanical watches. There’s something timeless about the precision, design, and engineering that goes into a well-built timepiece. Just like in code, I value structure, detail, and elegance.
            </SubHeading>
            <DraggableCardDemo />
            <Timeline />
        </Container>
    )
}