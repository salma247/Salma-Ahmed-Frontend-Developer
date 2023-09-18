import { useQuery } from "react-query";
import { RocketList } from "../components/Rocket/RocketList";
import { fetchRockets } from "../services/api";

export function Rockets() {
  const { data, isLoading } = useQuery("rockets", () => fetchRockets(10, 0));

  if (!data) {
    return null;
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-4 flex justify-center py-4">
        <RocketList data={data} />
    </div>
  );
}
