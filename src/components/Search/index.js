import React from "react";

function Search(props) {
  const inputHandler = event => {
    props.search(event.target.value);
  };
  return (
    <div className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={props.theTerm}
          onChange={inputHandler}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
