import { useState } from "react";
type Props = {
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  size?: number;
};

export function Pagination({
  page,
  setPage,
  hasNextPage,
  hasPreviousPage,
  size = 10,
}: Props) {
  const [activePage] = useState(page + 1);
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

  const activeStyle = "bg-blue-500 text-white";

  return (
    <div className="flex items-center justify-center">
      <button
        disabled={!hasPreviousPage}
        onClick={handlePreviousPage}
        className="rounded-l bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-700"
      >
        Previous
      </button>
      {Array.from(Array(size).keys()).map((_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={`bg-gray-800 px-4 py-2 font-bold text-white hover:bg-cyan-500 ${ activePage === index + 1 ? activeStyle : ""}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        disabled={!hasNextPage}
        onClick={handleNextPage}
        className="rounded-r bg-gray-800 px-4 py-2 font-bold text-white hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  );
}
