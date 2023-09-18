import { CapsuleCard } from "./CapsuleCard";
import { CapsuleSkeleton } from "./CapsuleSkeleton";

type Props = {
  data: Capsule[];
  loading?: boolean;
  size?: number;
};

export function CapsuleList({ data, loading, size = 10 }: Props) {
  if (loading) {
    return (
      <div className="mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(size)].map((_, index) => (
          <CapsuleSkeleton key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item: Capsule) => (
        <CapsuleCard key={item.id} item={item} />
      ))}
    </div>
  );
}
