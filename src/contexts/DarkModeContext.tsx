import { createContext, useContext, useState } from "react";

type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: true,
  setIsDarkMode: () => {},
});

type DarkModeProviderProps = {
  children: React.ReactNode;
};

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error(
      "DarkModeContext was used outside of DarkModeContextProvider "
    );
  return context;
}
