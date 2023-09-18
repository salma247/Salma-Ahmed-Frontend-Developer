import { CapsuleCard } from "./CapsuleCard";

type Props = {
  data: Capsule[];
};

export function CapsuleList({ data }: Props) {
  console.log(data);

  return (
    <div className="mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item: Capsule) => (
        <CapsuleCard key={item.id} item={item} />
      ))}
    </div>
  );
}