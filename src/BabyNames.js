import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import BabyNamesData from "./babyNamesData.json";

function BabyNames() {
  const [babyNames, setBabyNames] = useState([]);
  const [filterBabyNames, setFilterBabyNames] = useState([]);

  function anyName() {
    setBabyNames(BabyNamesData);
  }

  const search = (searchVal) => {
    let result = BabyNamesData.filter((child) => {
      return child.name.toLowerCase().includes(searchVal);
    });
    setFilterBabyNames(result);
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
