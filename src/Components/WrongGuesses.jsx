import React from "react";

export function WrongGuesses({ wrongGuesses }) {
  return (
    <div className="wrong-guesses-container">
      {wrongGuesses.length > 0 && <p>Wrong guesses:</p>}
      {wrongGuesses.map((letter, i) => (
        <span key={i}>{`${letter}, `}</span>
      ))}
    </div>
  );
}
