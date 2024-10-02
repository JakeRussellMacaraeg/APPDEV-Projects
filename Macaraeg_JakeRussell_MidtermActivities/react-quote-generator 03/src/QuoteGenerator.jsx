import React, { useState } from "react";

const quotes = [
  "0) Every End is a New Beginning.",
  "1) Hey, You, You're Finally Awake.",
  "2) The right man in the wrong place can make all the difference in the world.",
  "3) Nothing Is True, Everything Is Permitted.",
  "4) ZEUS, Your Son has Returned, I bring the destruction to the Olympus!",
  "5) Do not mistake my silence for lack of grief.",
  "6) We win because we are determined. Disciplined. Not because we feel ourselves superior."
];

export default function QuoteGenerator() {
  const [index, setIndex] = useState(0);
  const [history, setHistory] = useState([]);

  const incrementQuote = () => {
    setHistory((prev) => [...prev, index]);
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const decrementQuote = () => {
    if (history.length > 0) {
      const previousIndex = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setIndex(previousIndex);
    }
  };

  const randomQuote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === index); 

    setHistory((prev) => [...prev, index]);
    setIndex(randomIndex);
  };

  return (
    <div className="quote-generator-container">
      <h1>Quote Generator</h1>
      <div className="quote-display">
        <p>{quotes[index]}</p>
      </div>
      <div className="button-container">
        <button onClick={decrementQuote} disabled={history.length === 0}>
          Previous
        </button>
        <button onClick={randomQuote}>
          Random
        </button>
        <button onClick={incrementQuote}>
          Next
        </button>
      </div>
    </div>
  );
}
