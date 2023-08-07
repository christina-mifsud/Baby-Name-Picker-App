import React from "react";
import { REMOVE_FROM_FAV } from "./constants/constants";

function Favorites({ favorite, move }) {
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
            onClick={() => move(child.id, REMOVE_FROM_FAV)}
            className={isChildMale ? "blue" : "pink"}
          >{`${child.name} `}</span>
        );
      })}
    </div>
  );
}

export default Favorites;
