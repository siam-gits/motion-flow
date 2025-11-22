import { create } from 'zustand';

export const useStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  selectedComponent: null,
  setSelectedComponent: (comp) => set({ selectedComponent: comp }),
}));