import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

export default function Layout({ children }) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 min-h-screen">
      <Navbar />
      <Container>{children}</Container>
      <Toaster position="top-center" richColors />
      <Footer />
    </div>
  );
}
