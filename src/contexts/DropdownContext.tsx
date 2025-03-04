import { createContext, useContext, useState } from "react";

type DropdownType = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownContext = createContext<DropdownType>({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
});

type DropdownProviderProps = {
  children: React.ReactNode;
};

export function DropdownProvider({ children }: DropdownProviderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isDropdownOpen, setIsDropdownOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdown() {
  const context = useContext(DropdownContext);

  if (context === undefined)
    throw new Error(
      "DropdownContext was used outside of DropdownContextProvider "
    );
  return context;
}
