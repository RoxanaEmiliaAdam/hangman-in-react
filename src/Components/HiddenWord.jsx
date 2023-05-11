import React from "react";

export function HiddenWord({ input, correctGuesses }) {
  return (
    <div className="word">
      {input.split("").map((letter, index) => {
        return (
          <span className="letter" key={index}>
            {correctGuesses.includes(letter) ? letter : "_ "}
          </span>
        );
      })}
    </div>
  );
}
