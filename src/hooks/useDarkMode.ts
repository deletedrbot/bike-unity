import { useGlobal } from '../contexts/GlobalContext';

export function useDarkMode() {
  const { isDarkMode, toggleDarkMode } = useGlobal();
  return { isDarkMode, toggleDarkMode };
} 