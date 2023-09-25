import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

type PaginationProps = {
  pages: number;
  page: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  setPage: (page: number) => void;
};

export function Pagination({ pages, page, hasNextPage, hasPrevPage, setPage }: PaginationProps) {
 
  const activeStyle = "bg-blue-500 text-white";
  const defaultStyle = "bg-white text-gray-500 hover:bg-gray-50";
  const disabledStyle = "bg-gray-200 text-gray-400 cursor-not-allowed";

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  }

  return (
    <div className="flex items-center justify-center mt-8">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={!hasPrevPage}
          data-testid="prev-button"
          className={`${ !hasPrevPage ? disabledStyle : defaultStyle} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium`}
        >
          <FaChevronLeft />
        </button>
        {[...Array(pages)].map((_, index) => (
          <button
            key={index}
            data-testid="page-button"
            onClick={() => handlePageChange(index + 1)}
            className={`${page === index + 1 ? activeStyle : defaultStyle} relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={!hasNextPage}
          data-testid="next-button"
          className={`${!hasNextPage ? disabledStyle : defaultStyle} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium`}
        >
          <FaChevronRight />
        </button>
      </nav>
    </div>
  );
}
