import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <em>{props.meaning.example}</em>
      <p>{props.meaning.definition}</p>
      <br />
    </div>
  );
}
