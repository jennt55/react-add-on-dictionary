import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  return (
    <div className="Dictionary">
      <form className="searchBox" onSubmit={search}>
        <input
          className="searchInput"
          type="search"
          autoFocus="on"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
