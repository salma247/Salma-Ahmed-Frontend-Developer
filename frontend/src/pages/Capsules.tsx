import { useQuery } from "react-query";
import { CapsuleList } from "../components/Capsule/CapsuleList";
import { fetchCapsules } from "../services/api";

export function Capsules() {
  const { data, isLoading, isError, error }: any = useQuery("capsules", () =>
    fetchCapsules(10, 1),
  );

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No Capsules Found</div>;
  }

  return (
    <div className="mx-4 flex justify-center py-4">
      <CapsuleList data={data} loading={isLoading} />
    </div>
  );
}
