import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import BabyNamesData from "./babyNamesData.json";

function BabyNames() {
  const [filterBabyNames, setFilterBabyNames] = useState(BabyNamesData);

  // const [order, setOrder] = useState("ASC");
  // <button
  //   onClick={() =>
  //     setOrder((prevState) => (prevState === "ASC" ? "DESC" : "ASC"))
  //   }
  // >
  //   Change order
  // </button>;

  const search = (searchVal) => {
    let result = BabyNamesData.filter((child) => {
      return child.name.toLowerCase().includes(searchVal);
    });
    setFilterBabyNames(result);
    console.log(searchVal);
    console.log(result);
  };

  return (
    <>
      <Search search={search} />
      <SearchResults result={filterBabyNames} />
    </>
  );
}

export default BabyNames;
