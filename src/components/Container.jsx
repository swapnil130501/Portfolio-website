export default function Container({ children }) {
  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-white rounded-lg p-4">
      {children}
    </div>
  );
}
