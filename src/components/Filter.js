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
    </div>
  );
};

export default Filter;
