import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCapsules } from "../services/api";
import { useContextProvider } from "../hooks/useContext";
import { useNavigate } from "react-router-dom";
import { SearchFilter } from "../components/SearchFilter";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { Pagination } from "../components/Pagination";
import { Hero } from "../components/Hero";

export function Home() {
  const navigate = useNavigate();
  const {
    data: dataContext,
    setData,
    page,
    setPage,
    setPages,
  } = useContextProvider();
  const { data, isLoading, isError, error } = useQuery(["capsules", page], () =>
    fetchCapsules(10, page),
  );

  useEffect(() => {
    if (page) {
      navigate(`/capsules/${page}`);
      scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page, navigate]);

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
      {isError && <div>{error.message}</div>}
      <SearchFilter />
      <CapsuleList data={dataContext} loading={isLoading} />
      <Pagination />
    </div>
  );
}
