import { useThemeStore } from "../store/useThemeStore";
import { IconMoon, IconSun } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
    >
      {darkMode ? <IconSun className="text-yellow-400" /> : <IconMoon className="text-gray-800" />}
    </button>
  );
}