import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchCapsules } from "../services/api";
import { useContextProvider } from "../hooks/useContext";

import { SearchFilter } from "../components/SearchFilter";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { Pagination } from "../components/Pagination";
import { Hero } from "../components/Hero";

export function Home() {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);
  const { data, setData } = useContextProvider();

  const { data: capsules, isLoading, isError, error } = useQuery(
    ["capsules", page],
    () => fetchCapsules(page, 10),
    {
      keepPreviousData: true,
    },
  );


  useEffect(() => {
    if (capsules) {
      setData(capsules);
      setPages(Math.ceil(capsules.length / 10));
    }
  }, [capsules, setData]);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <SearchFilter />
      <CapsuleList data={data} loading={isLoading} />
      <Pagination
        page={page}
        pages={pages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
