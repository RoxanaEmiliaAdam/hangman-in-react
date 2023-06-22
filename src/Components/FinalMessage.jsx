import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function CheckWin(correct, guesses, word, gameOn) {
  let uniqueArr = [...new Set(word)];

  let status = "";

  // check if win
  if (gameOn) {
    if (uniqueArr.sort().toString() === correct.sort().toString()) {
      status = "win";
    }
  }

  // check if lose
  else if (guesses < 1) status = "lose";
  return status;
}

export function FinalMessage({
  correctGuesses,
  nrOfGuesses,
  input,
  setIsPlaying,
  isPlaying,
  wrongGuesses,
  newGameBtn,
}) {
  const [finalMessage, setFinalMessage] = useState("");

  useEffect(() => {
    if (CheckWin(correctGuesses, nrOfGuesses, input, isPlaying) === "win") {
      setFinalMessage("You Won!");
      setIsPlaying(false);
    } else if (
      CheckWin(correctGuesses, nrOfGuesses, input, isPlaying) === "lose"
    ) {
      setFinalMessage("You Lost...");
      setIsPlaying(false);
    }
  }, [correctGuesses, wrongGuesses]);
  const isGameLost =
    CheckWin(correctGuesses, nrOfGuesses, input, isPlaying) === "lose";
  const isGameWin =
    CheckWin(correctGuesses, nrOfGuesses, input, isPlaying) === "win";

  console.log(isGameLost, isGameWin, isPlaying);

  return (
    <>
      <div className="final-message">
        {(isGameLost || isGameWin) && <p>{finalMessage}</p>}
        {isGameLost && <p>The hidden word was: {input}</p>}
      </div>
      {(isGameLost || isGameWin) && (
        <button className="new_game" onClick={newGameBtn}>
          New Game
        </button>
      )}
    </>
  );
}
