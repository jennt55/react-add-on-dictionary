import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("forest");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    setLoaded(true);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    search();
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "331fct734c14fe46300adod3e6c6aacb";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageKey = "331fct734c14fe46300adod3e6c6aacb";
    let imagesUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageKey}`;
    axios.get(imagesUrl).then(handleImageResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>Enter a word to discover its meanings</h1>
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
