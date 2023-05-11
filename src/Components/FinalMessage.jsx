import React from "react";
import { useEffect } from "react";
import { CheckWin } from "./CheckWin";

export function FinalMessage({
  correctGuesses,
  nrOfGuesses,
  input,
  setIsPlaying,
}) {
  let finalMessage = "";
  let showHiddenWord = "";
  let isPlaying = true;

  if (CheckWin(correctGuesses, nrOfGuesses, input) === "win") {
    finalMessage = "You Won!";
    isPlaying = false;
  } else if (CheckWin(correctGuesses, nrOfGuesses, input) === "loose") {
    finalMessage = "You Lost...";
    showHiddenWord = "The hidden word was: ${input}";
    isPlaying = false;
  }

  useEffect(() => setIsPlaying(isPlaying));

  return (
    <>
      <div
        className="final-message"
        style={finalMessage !== "" ? { visibility: "visible" } : {}}
      >
        <p>{finalMessage}</p>
        <p>{showHiddenWord}</p>
      </div>
    </>
  );
}
