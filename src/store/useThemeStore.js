import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  darkMode: localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches),

  toggleTheme: () =>
    set((state) => {
      const newTheme = !state.darkMode ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
      return { darkMode: newTheme === "dark" };
    }),
}));
