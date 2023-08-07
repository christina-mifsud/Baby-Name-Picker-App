import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";
import BabyNamesData from "./babyNamesData.json";
import Favorites from "./Favourites";
import { ADD_TO_FAV, REMOVE_FROM_FAV } from "./constants/constants";

function BabyNames() {
  const [filterBabyNames, setFilterBabyNames] = useState(BabyNamesData);
  const [favorite, setFavorite] = useState([]);

  const search = (searchVal) => {
    const finalArray = BabyNamesData.filter((nameObject) => {
      // filter for duplicates - comparing objects in BabyNamesData and favorite to find repeated
      return !favorite.includes(nameObject);
    });
    let result = finalArray.filter((child) => {
      // filter for search
      return child.name.toLowerCase().includes(searchVal);
    });
    setFilterBabyNames(result);
  };

  const move = (indexOrId, condition) => {
    // indexOrId is both the index from the move click and the id from the unmove click
    const favName = filterBabyNames[indexOrId];
    if (condition === ADD_TO_FAV) {
      setFilterBabyNames((filterBabyNames) => {
        const originalArrayWithoutFav = [...filterBabyNames];
        originalArrayWithoutFav.splice(indexOrId, 1);
        return originalArrayWithoutFav;
      });
      setFavorite((prevFavoriteArray) => [...prevFavoriteArray, favName]);
    }
    if (condition === REMOVE_FROM_FAV) {
      const filteredFavoriteArray = favorite.filter(
        // removing the name from the favorites array by filtering out the nameObject.id which matches the indexOrId
        (nameObject) => nameObject.id !== indexOrId
      );
      setFavorite(filteredFavoriteArray);
      const foundNameObject = BabyNamesData.find(
        //
        (nameObject) => nameObject.id === indexOrId
      );
      setFilterBabyNames([...filterBabyNames, foundNameObject]);
    }
  };

  return (
    <>
      <Search search={search} />
      <Favorites favorite={favorite} move={move} />
      <SearchResults result={filterBabyNames} move={move} />
    </>
  );
}

export default BabyNames;
