import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCapsules, searchCapsules } from "../services/api";
import { useContextProvider } from "../hooks/useContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchFilter } from "../components/SearchFilter";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { Pagination } from "../components/Pagination";
import { Hero } from "../components/Hero";

export function Home() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status") || "all";
  const type = searchParams.get("type") || "";
  const serial = searchParams.get("serial") || "";
    
  const {
    data: dataContext,
    setData,
    page,
    setPage,
    setPages,
  } = useContextProvider();


  const { isLoading, isError, error } = useQuery(
    ["capsules", page, status, type, serial],
    () => {
      if (status === "all" && type === "" && serial === "") {
        return fetchCapsules(10, page);
      } else {
        return searchCapsules(type, status, serial, 10, 1);
      }
    },
    {
      keepPreviousData: true,
      enabled: !!localStorage.getItem("token"),
      onSuccess: (data) => {
        setData(data.docs);
        setPages(data.totalPages);
        setPage(data.page);
      },
    }
  );

  useEffect(() => {
    if (page) {
      navigate(`/capsules/${page}`);
      scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page, navigate]);



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
