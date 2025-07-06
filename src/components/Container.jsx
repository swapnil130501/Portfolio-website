export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-4xl w-full mx-auto ${className}`}>
      {children}
    </div>
  );
}
