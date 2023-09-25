import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCapsules } from "../services/api";
import { useContextProvider } from "../hooks/useContext";
import { useSearchParams } from "react-router-dom";
import { SearchFilter } from "../components/SearchFilter";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { Pagination } from "../components/Pagination";
import { Hero } from "../components/Hero";

export function Home() {
  const { page, setPage } = useContextProvider();
  const [searchParams] = useSearchParams();
  const { status, type, serial } = Object.fromEntries(searchParams.entries());

  const { data, isLoading, isError } = useQuery(
    ["capsules", page, status, type, serial],
    () => fetchCapsules(type, status, serial, 10, page),
    { keepPreviousData: true, enabled: !!localStorage.getItem("token") },
  );

  useEffect(() => {
    if (page) {
      scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page]);

  useEffect(() => {
    if (status || type || serial) {
      setPage(1);
    }
  }, [status, type, serial, setPage]);

  const onPaginate = (page: number) => {
    setPage(page);
  };

  return (
    <div className="container mx-auto px-4" data-testid="home-page">
      <Hero />
      <SearchFilter />
      
      {data && data.totalDocs === 0 && (
        <div className="mt-8 text-center text-2xl">
          <p>No capsules found</p>
        </div>
      )}

      {isError && (
        <div className="mt-8 text-center text-2xl">
          <p>Something went wrong</p>
        </div>
      )}

      <CapsuleList data={data?.docs} loading={isLoading} />
      {data && (
        <>
          <Pagination
            setPage={onPaginate}
            pages={data.totalPages}
            page={page}
            hasNextPage={data.hasNextPage}
            hasPrevPage={data.hasPrevPage}
          />
        </>
      )}
    </div>
  );
}
