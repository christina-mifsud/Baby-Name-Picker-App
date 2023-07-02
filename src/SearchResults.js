import React from "react";

function SearchResults({ result }) {
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
            className={isChildMale ? "blue" : "pink"}
          >{`${child.name} `}</span>
        );
      })}
    </div>
  );
}

export default SearchResults;
