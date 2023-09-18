import { useQuery } from "react-query";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { fetchCapsules } from "../services/api";
import { Pagination } from "../components/Pagination";
import { useState } from "react";
import { Hero } from "../components/Hero";
import { SearchFilter } from "../components/SearchFilter";

export function Home() {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [capsules, setCapsules] = useState([]);

  const { data, isLoading, isError, error }: any = useQuery("capsules", () =>
    fetchCapsules(10, 0),
  );

  const handleSearch = (status: string, type: string, serial: string) => {
    const filteredCapsules = data.filter((capsule: any) => {
      const lowercaseType = type.toLowerCase();
      const lowercaseSerial = serial.toLowerCase();
      const matchesStatus = status === "all" || capsule.status === status;
      const matchesType = type === "" || capsule.type.toLowerCase().includes(lowercaseType);
      const matchesSerial = serial === "" || capsule.serial.toLowerCase().includes(lowercaseSerial);
      return matchesStatus && matchesType && matchesSerial;
    });
    setCapsules(filteredCapsules);
  };

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <Hero />
      <div className="mx-4 flex flex-col justify-center py-4">
        <SearchFilter onSearch={handleSearch} />
        {capsules.length ? <CapsuleList data={capsules} /> : <CapsuleList data={data} loading={isLoading}/>}
        <Pagination
          page={page}
          setPage={setPage}
          hasNextPage={true}
          hasPreviousPage={false}
          size={size}
        />
      </div>
    </>
  );
}