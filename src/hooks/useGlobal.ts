import { useContext } from 'react';
import { GlobalContext } from '../contexts/globalContext.types';

export const useGlobal = () => {
  const ctx = useContext(GlobalContext);
  if (!ctx) throw new Error('useGlobal must be used within GlobalProvider');
  return ctx;
}; 