import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("forest");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  function search() {
    let apiKey = "331fct734c14fe46300adod3e6c6aacb";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Enter a word to find out the definition</h1>
          <form className="searchBox" onSubmit={handleSubmit}>
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
  } else {
    load();
    return "Loading";
  }
}
