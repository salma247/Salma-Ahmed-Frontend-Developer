import { useContextProvider } from "../hooks/useContext";
import { searchCapsules } from "../services/api";
import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";

export function SearchFilter() {
  const { setData, setPage, setPages } = useContextProvider();

  const [state, setState] = useState({
    status: "all",
    type: "",
    serial: "",
  });

  const onSearch = async () => {
    const data = await searchCapsules(state, 10, 1);
    setData(data.docs);
    setPage(data.page);
    setPages(data.totalPages);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
    setState({ status: "all", type: "", serial: "" });
  };

  const handleStateChange = (newState: any) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };


  return (
    <form className="mx-auto" onSubmit={handleSubmit}>
      <div className="mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label
            htmlFor="status"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <select
            id="status"
            value={state.status}
            onChange={(e) => handleStateChange({ status: e.target.value })}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="type"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Type
          </label>
          <input
            type="text"
            id="type"
            value={state.type}
            onChange={(e) => handleStateChange({ type: e.target.value })}
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="ex. Dragon"
          />
        </div>
        <div>
          <label
            htmlFor="serial"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Serial
          </label>
          <input
            type="text"
            value={state.serial}
            onChange={(e) => handleStateChange({ serial: e.target.value })}
            id="serial"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="ex. C201"
          />
        </div>
        <div className="flex items-end justify-end">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
