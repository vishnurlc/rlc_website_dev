import React from 'react';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  setPageNumber,
  scrollIntoView,
}) => {
  const showPages = 3; // Number of page numbers to show

  let startPage = Math.max(currentPage - Math.floor(showPages / 2), 1);
  let endPage = Math.min(startPage + showPages - 1, totalPages);

  if (totalPages - endPage < showPages - 1) {
    startPage = Math.max(endPage - showPages + 1, 1);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );
  console.log(currentPage);
  return (
    <nav aria-label="Page navigation example">
      <ul className=" !list-none flex">
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => {
              onPageChange({
                name: 'pageNumber',
                value: currentPage - 1,
              });
              setPageNumber(currentPage - 1);
              scrollIntoView();
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            aria-current={currentPage === pageNumber ? 'page' : undefined}
          >
            <button
              className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
                currentPage === pageNumber
                  ? 'dark:hover:text-white dark:bg-neutral-700 bg-red-600'
                  : ''
              }`}
              onClick={() => {
                onPageChange({ name: 'pageNumber', value: pageNumber });
                setPageNumber(pageNumber);
                scrollIntoView();
              }}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => {
              onPageChange({
                name: 'pageNumber',
                value: currentPage + 1,
              });
              setPageNumber(currentPage + 1);
              scrollIntoView();
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
