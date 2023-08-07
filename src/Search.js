import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  // useEffect(() => {
  //   search(searchInput);
  // }, [searchInput]); // dependency is when I want this code (useEffect) to run

  function handleSearchInput(event) {
    const inputValue = event.target.value;
    setSearchInput(inputValue);
    search(inputValue);
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
