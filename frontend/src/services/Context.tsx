import { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextProps = {
  data: Capsule[];
  status: string;
  type: string;
  serial: string;
  setData: (data: Capsule[]) => void;
  setStatus: (status: string) => void;
  setType: (type: string) => void;
  setSerial: (serial: string) => void;
  onSearch: (
    data: Capsule[],
    status: string,
    type: string,
    serial: string,
  ) => void;
};

const Context = createContext<ContextProps>({
  data: [],
  status: "",
  type: "",
  serial: "",
  setData: () => {},
  setStatus: () => {},
  setType: () => {},
  setSerial: () => {},
  onSearch: () => {},
});

export function ContextProvider({ children }: Props) {
  const [data, setData] = useState<Capsule[]>([]);
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("");
  const [serial, setSerial] = useState("");

  const onSearch = (
    data: Capsule[],
    status: string,
    type: string,
    serial: string,
  ) => {
    const filteredCapsules = data.filter((capsule: any) => {
      const lowercaseType = type.toLowerCase();
      const lowercaseSerial = serial.toLowerCase();
      const matchesStatus = status === "all" || capsule.status === status;
      const matchesType =
        type === "" || capsule.type.toLowerCase().includes(lowercaseType);
      const matchesSerial =
        serial === "" || capsule.serial.toLowerCase().includes(lowercaseSerial);
      return matchesStatus && matchesType && matchesSerial;
    });
    setData(filteredCapsules);
  };

  return (
    <Context.Provider
      value={{
        data,
        status,
        type,
        serial,
        setStatus,
        setType,
        setSerial,
        onSearch,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useContextProvider() {
  return useContext(Context);
}
