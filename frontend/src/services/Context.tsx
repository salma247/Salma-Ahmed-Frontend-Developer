import { createContext, useState, ReactNode } from "react";

type ContextProps = {
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
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  return (
    <Context.Provider value={{ page, setPage, pages, setPages }}>
      {children}
    </Context.Provider>
  );
}