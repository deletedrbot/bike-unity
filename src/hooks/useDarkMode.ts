import { useGlobal } from '../hooks/useGlobal';

export function useDarkMode() {
  const { isDarkMode, toggleDarkMode } = useGlobal();
  return { isDarkMode, toggleDarkMode };
} 