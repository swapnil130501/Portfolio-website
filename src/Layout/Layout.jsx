import Container from "../components/Container";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Container>{children}</Container>
    </div>
  );
}
