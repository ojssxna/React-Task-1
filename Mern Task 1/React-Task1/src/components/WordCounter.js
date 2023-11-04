import React, { useState } from "react";
import "./WordCounter.css";

const WordCounter = () => {
  const [wordCount, setWordCount] = useState(0);

  const counter = (str) => {
    // Use regex to split the input into words
    const words = str.match(/\b\w+\b/g) || []; // Matches word characters

    setWordCount(words.length);
  };

  return (
    <div className="container">
      <h1>Paragraph Word Counter</h1>
      <textarea
        name="textAr"
        id="textAr"
        cols="50"
        rows="10"
        placeholder="Enter Your Text"
        onKeyUp={(e) => counter(e.target.value)}
      ></textarea>
      <h4>Word Count: {wordCount}</h4>
    </div>
  );
};

export default WordCounter;
