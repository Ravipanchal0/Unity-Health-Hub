import React from "react";
import "../css/Search.css";

function Search(props) {
  return (
    <>
      <div className="search-box">
        <input type="search" className="search-input" name="search" placeholder={props.search} />
        <button className="search-btn">search</button>
      </div>
    </>
  );
}

export default Search;
