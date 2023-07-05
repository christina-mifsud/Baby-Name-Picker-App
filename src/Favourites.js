import React from "react";

function Favorites({ favorite }) {
  return (
    <div>
      {favorite.map((child, index) => {
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

export default Favorites;
