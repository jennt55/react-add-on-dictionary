import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong> {props.meaning.definition}
      </p>
      <em>Example: {props.meaning.example}</em>
      <br />
      <br />
      <strong>Synonyms:</strong> <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
