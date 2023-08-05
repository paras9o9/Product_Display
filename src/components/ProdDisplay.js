import React, { useState, useEffect } from "react";
import Filter from "./Filter";
const url = "http://localhost:3000/tours";

const ProductDisplay = () => {
  const [tour, setTour] = useState([]);
  // console.log(tour);
  const [filterTour, setFilterTour] = useState("all");
  useEffect(() => {
    // Other Approach
    //     fetch(url)
    //       .then((response) => response.json())
    //       .then((jsonData) => setTour(jsonData));
    const getData = async () => {
      try {
        const resource = await fetch(url);
        const response = await resource.json();
        // console.log(response);
        setTour(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  // console.log(tour);
  const handleFilter = (tourCategory) => {
    setFilterTour(tourCategory);
  };
  // console.log(filterTour);

  const filteredTours =
    filterTour === "all"
      ? tour
      : tour.filter((item) => item.category === filterTour);

  return (
    <div>
      <Filter handleFilter={handleFilter} />
      <div className="destination-container container">
        {filteredTours.map((item) => (
          <div
            className="destination m-4 card"
            style={{ width: "18rem" }}
            key={item.id}
          >
            <img src={item.img} alt={item.title} className="card-img-top" />
            <div className="destination-info card-body">
              <header>
                <h4 className="title card-title fs-5">{item.title}</h4>
                <h4 className="price card-text fs-5">{item.price}</h4>
              </header>
              <p className="text card-text">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
