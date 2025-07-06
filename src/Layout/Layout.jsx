import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <Navbar />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
