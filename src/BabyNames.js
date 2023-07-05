import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import BabyNamesData from "./babyNamesData.json";
import Favorites from "./Favourites";

function BabyNames() {
  const [filterBabyNames, setFilterBabyNames] = useState(BabyNamesData);
  const [favorite, setFavorite] = useState([]);

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

  const move = (index) => {
    const favName = filterBabyNames[index];
    setFilterBabyNames((filterBabyNames) => {
      const originalArrayWithoutFav = [...filterBabyNames];
      originalArrayWithoutFav.splice(index, 1);
      return originalArrayWithoutFav;
    });
    setFavorite((newEmptyArray) => [...newEmptyArray, favName]);
  };

  return (
    <>
      <Search search={search} />
      <Favorites favorite={favorite} />
      <SearchResults result={filterBabyNames} move={move} />
    </>
  );
}

export default BabyNames;
