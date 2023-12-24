'use client';

import {
  createContext, useContext, useState, ReactNode,
} from 'react';

type ThemeContextType = {
  labTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  return useContext(ThemeContext) as ThemeContextType;
}

type ThemeProviderProps = {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [labTheme, setTheme] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setTheme((prev) => !prev);
  };

  const contextValue: ThemeContextType = {
    labTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
