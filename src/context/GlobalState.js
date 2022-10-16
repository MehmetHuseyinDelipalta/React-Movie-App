import { createContext } from "react";

//! create context
export const GlobalContext = createContext();

//! provider components
export const GlobalProvider = (props) => {
  return (
    <GlobalContext.Provider value={{ mhd: "developer" }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
