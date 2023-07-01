import React from "react";
import "./App.css";

import BabyNamesData from "./babyNamesData.json";

function BabyNames() {
  const sortedBabyNames = BabyNamesData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <>
      <div className="outerFrame">
        {sortedBabyNames.map((child, index) => {
          let isChildMale;
          if (child.sex === "m") {
            isChildMale = true;
          }
          return (
            <>
              <span
                key={index}
                className={isChildMale ? "blue" : "pink"}
              >{`${child.name} `}</span>
            </>
          );
        })}
      </div>
    </>
  );
}

export default BabyNames;
