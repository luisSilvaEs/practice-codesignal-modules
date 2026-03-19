import { createContext } from "react";
import React from "react";

interface NavigationContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

//1. Create the context with an undefined default value
const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

//2. Create a provider component
export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = React.useState("practice");

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

//3. Create a custom hook for easy access to the context
export const useNavigation = () => {
  const context = React.useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
