import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Display from "./components/ProdDisplay";

const App = () => {
  return (
    <div>
      <section className="our-tour mx-auto p-3 text-center" id="tour">
        <Header />
        <Display />
      </section>
    </div>
  );
};

export default App;
