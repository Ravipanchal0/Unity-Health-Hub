import React from "react";
import "../css/Search.css";

function Search(props) {
  let inputValue = "";
  function handleChange(event) {
    inputValue = event.target.value;
  }
  return (
    <>
      <div className="search-box">
        <input id="search" type="search" className="search-input" name="searchBox" placeholder={props.search} onChange={handleChange} />
        <button id="search-btn" className="search-btn">
          search
        </button>
      </div>
    </>
  );
}

export default Search;
