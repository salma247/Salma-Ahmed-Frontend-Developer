import { useState } from "react";
type Props = {
  pages: number;
  page: number;
  onPageChange: (page: number) => void;
};

export function Pagination({
  pages,
  page,
  onPageChange,
}: Props) {
  const [activePage] = useState(page + 1);
 
  const activeStyle = "bg-blue-500 text-white";

  return (
    <div className="flex items-center justify-center">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          onClick={() => onPageChange(activePage - 1)}
          disabled={activePage === 1}
          className={`${activeStyle} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-800`}
        >
          <span className="sr-only">Previous</span>
          <svg className="h-5 w-5" x-description="Heroicon name: solid/chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10.707 5.293a1 1 0 010 1.414L7.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {[...Array(pages)].map((_, index) => (
          <button
            onClick={() => onPageChange(index + 1)}
            key={index}
            aria-current="page"
            className={`${activeStyle} bg-white relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 hover:bg-blue-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-800`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(activePage + 1)}
          disabled={activePage === pages}
          className={`${activeStyle} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-blue-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-800`}
        >
          <span className="sr-only">Next</span>
          <svg className="h-5 w-5" x-description="Heroicon name: solid/chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M9.293 14.707a1 1 0 010-1.414L12.586 10 9.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
    </div>
  );
}
