import { createContext } from 'react';

export interface GlobalState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const GlobalContext = createContext<GlobalState | undefined>(undefined); 