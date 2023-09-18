import { useQuery } from "react-query";
import { fetchRockets, fetchCapsules } from "../services/api";

export function Home() {
  const { data, isLoading } = useQuery("rockets", () => fetchRockets());
  const { data: capsules, isLoading: isLoadingCapsules } = useQuery(
    "capsules",
    () => fetchCapsules()
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLoadingCapsules) {
    return <div>Loading...</div>;
  }

  console.log(data, capsules);
  return (
    <div className="mx-4 flex justify-center py-4">
      <h1 className="text-white">Hello Vite + React!</h1>
    </div>
  );
}
