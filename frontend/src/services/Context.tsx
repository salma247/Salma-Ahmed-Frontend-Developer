import { createContext, useState, ReactNode } from "react";

type ContextProps = {
  response: CapsuleResponse;
  setResponse: (response: CapsuleResponse) => void;
  data : Capsule[];
  setData: (data: Capsule[]) => void;
  page: number;
  setPage: (page: number) => void;
  pages: number;
  setPages: (pages: number) => void;
};

type Props = {
  children: ReactNode;
};

export const Context = createContext({} as ContextProps);

export function ContextProvider({ children }: Props) {
  const [data, setData] = useState<Capsule[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [response, setResponse] = useState<CapsuleResponse>({} as CapsuleResponse);

  return (
    <Context.Provider value={{ data, setData, page, setPage, pages, setPages, response, setResponse }}>
      {children}
    </Context.Provider>
  );
}