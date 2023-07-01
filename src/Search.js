import React, { useState } from "react";

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearchInput(event) {
    setSearchInput(event.target.value);
    // console.log(searchInput);
  }

  return (
    <div className="search">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.search(searchInput);
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
