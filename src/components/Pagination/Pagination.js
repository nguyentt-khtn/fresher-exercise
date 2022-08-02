import React from "react";

export default function Pagination(props) {
  const { page, total_pages, handlePagination } = props;
  const handleClick = (newPage) => {
    if (handlePagination) {
      handlePagination(newPage);
    }
  };
  return (
    <div>
      <button
        style={{
          padding: "5px",
          backgroundColor: "tomato",
          marginRight: "10px",
        }}
        disabled={page <= 1}
        onClick={() => {
          handleClick(page - 1);
        }}
      >
        Prev
      </button>
      <button
        style={{
          padding: "5px",
          backgroundColor: "tomato",
          marginRight: "10px",
        }}
        disabled={page >= total_pages}
        onClick={() => {
          handleClick(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}
