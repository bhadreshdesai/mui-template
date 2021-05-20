import * as React from "react";

type SideBarContextProps = {
  isSideBarOpen: boolean;
  toggleIsSideBarOpen: (value: boolean) => void;
};

type SideBarContextProviderProps = {
  children: React.ReactNode;
};

const SideBarContext = React.createContext<SideBarContextProps | undefined>(
  undefined
);

const SideBarContextProvider = ({ children }: SideBarContextProviderProps) => {
  const [isSideBarOpen, toggleIsSideBarOpen] = React.useState(false);

  return (
    <SideBarContext.Provider value={{ isSideBarOpen, toggleIsSideBarOpen }}>
      {children}
    </SideBarContext.Provider>
  );
};

const useSideBarContext = () => {
  const context = React.useContext(SideBarContext);
  if (context === undefined) {
    throw new Error(
      "useSideBarContext must be used within a SideBarContextProvider"
    );
  }
  return context;
};

export { SideBarContextProvider, useSideBarContext };
