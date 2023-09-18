import { useState } from "react";

type Props = {
  onSearch: (status: string, type: string, serial: string) => void;
};

export function SearchFilter({ onSearch }: Props) {
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("");
  const [serial, setSerial] = useState("");

  const handleStatusChange = (event : any) => {
    setStatus(event.target.value);
  };

  const handleTypeChange = (event : any) => {
    setType(event.target.value);
  };

  const handleSerialChange = (event : any) =>{
    setSerial(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    onSearch(status, type, serial);
    setStatus('all');
    setType('');
    setSerial('');
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
            value={status}
            onChange={handleStatusChange}
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
            value={type}
            onChange={handleTypeChange}
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
            value={serial}
            onChange={handleSerialChange}
            id="serial"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="ex. C201"
          />
        </div>
        <div className="flex items-end justify-end">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
