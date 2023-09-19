import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCapsules } from "../services/api";
import { useContextProvider } from "../hooks/useContext";

import { SearchFilter } from "../components/SearchFilter";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { Pagination } from "../components/Pagination";
import { Hero } from "../components/Hero";

export function Home() {
  const { data : dataContext, setData, page, setPage, pages, setPages } = useContextProvider();
  const { data, isLoading, isError, error } = useQuery(["capsules"], () =>
    fetchCapsules(10, 0)
  );


  useEffect(() => {
    if (data) {
      setData(data.docs);
      setPage(data.page);
      setPages(data.totalPages);
    }
  }, [data, setData, setPage, setPages]);


  return (
    <div className="container mx-auto px-4">
      <Hero />
      {/* <SearchFilter /> */}
      <CapsuleList data={dataContext} loading={isLoading} /> 
      <Pagination
        page={page}
        pages={pages}
        onPageChange={(page: number) => setPage(page)}
        hasPreviousPage={page > 1}
        hasNextPage={page < pages}
      />
    </div>
  );
}
