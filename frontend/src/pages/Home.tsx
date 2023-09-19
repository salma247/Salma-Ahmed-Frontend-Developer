import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCapsules } from "../services/api";
import { useContextProvider } from "../hooks/useContext";

import { SearchFilter } from "../components/SearchFilter";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { Pagination } from "../components/Pagination";
import { Hero } from "../components/Hero";

export function Home() {
  const { state, setState } = useContextProvider();

  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const { data: capsules, isLoading, isError, error } = useQuery(
    ["capsules", page],
    () => fetchCapsules(10, page), 
    {
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    if (capsules) {
      setState({ data: capsules.docs });
      setPages(capsules.totalPages);
    }
  }, [capsules, setState]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <SearchFilter />
      <CapsuleList data={state.data} loading={isLoading} /> 
      <Pagination
        page={page}
        pages={pages}
        onPageChange={handlePageChange}
        hasPreviousPage={capsules?.hasPrevPage}
        hasNextPage={capsules?.hasNextPage}
      />
    </div>
  );
}
