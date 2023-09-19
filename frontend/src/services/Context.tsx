import { createContext, useState, ReactNode } from "react";

type ContextProps = {
  state: {
    data: Capsule[];
    status: string;
    type: string;
    serial: string;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      data: Capsule[];
      status: string;
      type: string;
      serial: string;
    }>
  >;
  onSearch: () => void;
};

const initialContextState: ContextProps["state"] = {
  data: [],
  status: "",
  type: "",
  serial: "",
};

export const Context = createContext<ContextProps | undefined>(undefined);

type ContextProviderProps = {
  children: ReactNode;
};

export function ContextProvider({ children }: ContextProviderProps) {
  const [state, setState] =
    useState<ContextProps["state"]>(initialContextState);

  const onSearch = () => {
    const filteredCapsules = state.data.filter((capsule) => {
      const lowercaseType = state.type?.toLowerCase() || "";
      const lowercaseSerial = state.serial?.toLowerCase() || "";
      const matchesStatus =
        state.status === "all" || state.status === capsule.status;
      const matchesType =
        state.type === "" || capsule.type.toLowerCase().includes(lowercaseType);
      const matchesSerial =
        state.serial === "" ||
        capsule.serial.toLowerCase().includes(lowercaseSerial);
      return matchesStatus && matchesType && matchesSerial;
    });

    console.log(filteredCapsules);
    
    setState((prevState) => ({
      ...prevState,
      data: filteredCapsules,
    }));
  };

  const contextValue: ContextProps = {
    state,
    setState,
    onSearch,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
