import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CheckWin } from "./CheckWin";

export function FinalMessage({
  correctGuesses,
  nrOfGuesses,
  input,
  setIsPlaying,
  wrongGuesses,
}) {
  const [finalMessage, setFinalMessage] = useState("");
  console.log(finalMessage);

  useEffect(() => {
    console.log("ok");
    if (CheckWin(correctGuesses, nrOfGuesses, input) === "win") {
      setFinalMessage("You Won!");
      setIsPlaying = false;
    } else if (CheckWin(correctGuesses, nrOfGuesses, input) === "lose") {
      setFinalMessage("You Lost...");

      setIsPlaying = false;
    }
  }, [correctGuesses, wrongGuesses]);
  const isGameLost = CheckWin(correctGuesses, nrOfGuesses, input) === "lose";

  //useEffect(() => setIsPlaying(isPlaying));

  return (
    <>
      <div className="final-message">
        <p>{finalMessage}</p>
        {isGameLost && <p>The hidden word was: {input}</p>}
      </div>
    </>
  );
}
