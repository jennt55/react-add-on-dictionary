import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "331fct734c14fe46300adod3e6c6aacb";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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
