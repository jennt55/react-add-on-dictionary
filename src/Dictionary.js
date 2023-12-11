import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
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
      <section>
        <form className="searchBox" onSubmit={search}>
          <input
            className="searchInput"
            type="search"
            placeholder="Enter a word here"
            autoFocus="on"
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
