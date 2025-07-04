import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function Layout({ children }) {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}
