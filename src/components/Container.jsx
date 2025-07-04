export default function Container({ children }) {
  return (
    <div className="h-[200vh] max-w-4xl mx-auto bg-white rounded-lg p-6 md:pt-20 md:pb-10">
      {children}
    </div>
  );
}
