import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCapsules, searchCapsules } from "../services/api";
import { useContextProvider } from "../hooks/useContext";
import { useNavigate, useParams } from "react-router-dom";
import { SearchFilter } from "../components/SearchFilter";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { Pagination } from "../components/Pagination";
import { Hero } from "../components/Hero";

export function Home() {
  const searchParams = useParams();
  const navigate = useNavigate();
  const { status = "", type = "", serial = "" } = searchParams;

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

  const { data: searchData, isLoading: isSearchLoading } = useQuery(
    ["search", status, type, serial, page],
    () => searchCapsules(status, type, serial, 10, page),
    { enabled: !!status || !!type || !!serial },
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

  useEffect(() => {
    if (searchData) {
      setData(searchData.docs);
      setPage(searchData.page);
      setPages(searchData.totalPages);
    }
  }, [searchData, setData, setPage, setPages]);

  return (
    <div className="container mx-auto px-4">
      <Hero />
      {isError && <div>{error.message}</div>}
      <SearchFilter />
      <CapsuleList data={dataContext} loading={isLoading && isSearchLoading} />
      <Pagination />
    </div>
  );
}
