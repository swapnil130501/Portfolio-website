import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-neutral-800 min-h-screen">
      <Navbar />
      <Container>{children}</Container>
      <Toaster position="top-center" richColors />
      <Footer />
    </div>
  );
}
