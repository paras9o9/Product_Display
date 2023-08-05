import React, { useState } from "react";

const Filter = ({ handleFilter }) => {
  const filterTour = [
    { id: "all", name: "All" },
    {
      id: "somewhere near",
      name: "Somewhere near",
    },
    {
      id: "somewhere far",
      name: "Somewhere far",
    },
    {
      id: "somewhere center",
      name: "Somewhere center",
    },
  ];
  // tour.filter((tours) => {
  //   const category = tours.category;
  //   console.log(category);
  // });
  // console.log(handleFilter);
  return (
    <div
      className="btn-container btn-group my-5"
      role="group"
      aria-label="Basic example"
    >
      {filterTour.map((tours) => {
        return (
          <button
            type="button"
            className="filter-btn btn btn-primary"
            data-id={tours.id}
            key={tours.id}
            onClick={() => handleFilter(tours.id)}
          >
            {tours.name}
          </button>
        );
      })}
      {/* <button
        type="button"
        className="filter-btn btn btn-primary"
        data-id="all"
      >
        All
      </button>
      <button
        type="button"
        className="filter-btn btn btn-primary"
        data-id="somewhere near"
      >
        Somewhere Near
      </button>
      <button
        type="button"
        className="filter-btn btn btn-primary"
        data-id="somewhere far"
      >
        Somewhere Far
      </button>
      <button
        type="button"
        className="filter-btn btn btn-primary"
        data-id="somewhere center"
      >
        Somewhere center
      </button> */}
    </div>
  );
};

export default Filter;
