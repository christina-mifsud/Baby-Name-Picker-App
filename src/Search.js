import React, { useState, useEffect } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    props.search(searchInput);
  }, [searchInput]); // dependency is when I want this code (useEffect) to run

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="search">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="form-group search-box"
      >
        <label htmlFor="babyName"></label>
        <div className="search-row">
          <input
            value={searchInput}
            onChange={handleSearchInput}
            type="text"
            id="babyName"
            className="form-control"
            placeholder="Search for a name .."
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
