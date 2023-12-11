import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <em>{props.meaning.example}</em>
      <p>{props.meaning.definition}</p>
      <Synonyms synonyms={props.meaning.synonyms} />

      <br />
    </div>
  );
}
