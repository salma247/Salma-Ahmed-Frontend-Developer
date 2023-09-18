import { RocketCard } from "./RocketCard";

type Props = {
  data: Rocket[];
};
export function RocketList({ data }: Props) {
  console.log(data);

  return (
    <div className="mx-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item: Rocket) => (
        <RocketCard key={item.id} item={item} />
      ))}
    </div>
  );
}
