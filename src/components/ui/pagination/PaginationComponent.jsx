// // components/Pagination.js

// import React from 'react';

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = Array.from(
//     { length: totalPages },
//     (_, index) => index + 1
//   );

//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="list-style-none flex">
//         <li>
//           <button
//             href="#"
//             className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
//             onClick={() => {
//               onPageChange(currentPage - 1);
//             }}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//         </li>
//         {pageNumbers.map((pageNumber) => (
//           <li
//             key={pageNumber}
//             aria-current={currentPage === pageNumber ? 'page' : undefined}
//           >
//             <button
//               className={`relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white ${
//                 currentPage === pageNumber
//                   ? 'dark:hover:text-white dark:bg-neutral-700'
//                   : ''
//               }`}
//               onClick={(e) => {
//                 onPageChange(pageNumber);
//               }}
//             >
//               {pageNumber}
//             </button>
//           </li>
//         ))}
//         <li>
//           <button
//             className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
//             onClick={(e) => {
//               onPageChange(currentPage + 1);
//             }}
//             disabled={currentPage === totalPages}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;
// components/Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
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

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <button
            className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            onClick={() => {
              onPageChange(currentPage - 1);
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
                  ? 'dark:hover:text-white dark:bg-neutral-700'
                  : ''
              }`}
              onClick={() => {
                onPageChange(pageNumber);
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
              onPageChange(currentPage + 1);
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
