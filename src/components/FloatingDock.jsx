export default function FloatingDock({ stack = [] }) {
  return (
    <div className="flex w-fit items-center mt-2 gap-2 bg-neutral-800/80 p-2 rounded-lg shadow-lg backdrop-blur-sm">
      {stack.map((tech, index) => {
        const Icon = tech.icon;
        return (
          <div key={index} className="flex items-center gap-1 text-xs text-white">
            <Icon size={16} />
            <span>{tech.name}</span>
          </div>
        );
      })}
    </div>
  );
}
