import React from 'react';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;

  const handlePageClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <a
          key={i}
          href="#"
          className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
            currentPage === i
              ? 'bg-indigo-600 text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </a>
      );
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 pagination">
      <div className="flex flex-1 justify-between sm:hidden">
        {showPrevious && (
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </a>
        )}
        {showNext && (
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </a>
        )}
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage - 1) * 5 + 1}</span> to{' '}
            <span className="font-medium">{Math.min(currentPage * 5, totalPages * 5)}</span> of{' '}
            <span className="font-medium">{totalPages * 5}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            {generatePageNumbers()}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
