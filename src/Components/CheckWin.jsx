import React from "react";

export function CheckWin(correct, guesses, word) {
  let status = "win";

  // check if win
  word.split("").forEach((letter) => {
    if (!correct.includes(letter) && guesses >= 1) {
      status = "";
    }
  });

  // check if lose

  if (guesses < 1) status = "lose";
  return status;
}
