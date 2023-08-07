import React from "react";
import { ADD_TO_FAV } from "./constants/constants";

function SearchResults({ result, move }) {
  const sortedBabyNames = result.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div>
      {sortedBabyNames.map((child, index) => {
        let isChildMale;
        if (child.sex === "m") {
          isChildMale = true;
        }
        return (
          <span
            key={index}
            onClick={() => move(index, ADD_TO_FAV)}
            className={isChildMale ? "blue" : "pink"}
          >{`${child.name} `}</span>
        );
      })}
    </div>
  );
}

export default SearchResults;
