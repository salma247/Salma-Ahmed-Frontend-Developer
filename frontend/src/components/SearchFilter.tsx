import { useSearchParams } from "react-router-dom";

export function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams({
    status: "",
    type: "",
    serial: "",
  });

  const status = searchParams.get("status") || "all";
  const type = searchParams.get("type") || "";
  const serial = searchParams.get("serial") || "";

  return (
    <form className="mx-auto mt-5">
      <div className="mb-6 grid gap-6 md:grid-cols-3">
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
            onChange={e =>
              setSearchParams(
                (old) => {
                  old.set("status", e.target.value);
                  return old;
                },
                { replace: true },
              )
            }
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
            onChange={e =>
              setSearchParams(
                (old) => {
                  old.set("type", e.target.value);
                  return old;
                },
                { replace: true },
              )
            }
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
            onChange={(e) =>
              setSearchParams(
                (old) => {
                  old.set("serial", e.target.value);
                  return old;
                },
                { replace: true },
              )
            }
            id="serial"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="ex. C201"
          />
        </div>
      </div>
    </form>
  );
}
