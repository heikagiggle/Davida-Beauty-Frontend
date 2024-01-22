/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

import "./Pagination.css";

const Pagination = ({ totalPosts, postsPerPage, onClick, currentPage }) => {
  let pages = [];

  //to round up to nearest integer

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.length > 1 && (
        <ul className="pagination">
          {pages.map((page) => (
            <li key={page}>
              <button
                className={
                  parseInt(currentPage) === page
                    ? "pagination_button active"
                    : "pagination_button"
                }
                onClick={() => onClick(page)}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Pagination;
