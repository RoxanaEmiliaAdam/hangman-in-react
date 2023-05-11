import React, { useState } from "react";
import { useEffect } from "react";

import "./App.css";
import { FinalMessage } from "./Components/FinalMessage";
import { HiddenWord } from "./Components/HiddenWord";
import { WrongGuesses } from "./Components/WrongGuesses";

function App() {
  const [input, setInput] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [displayMessage, setDisplayMessage] = useState("");
  const [nrOfGuesses, setNrOfGuesses] = useState(5);

  // Start Btn
  function handleStartBtn(e) {
    e.preventDefault(e);
    setInput(input);

    setDisplayMessage("Start guessing the letters...");
  }
  console.log(`input ${input}`);
  console.log(typeof input);

  // Keypress event => replace hidden characters with letters
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, keyCode } = event;
      if (keyCode >= 65 && keyCode <= 90 && isPlaying) {
        const letter = key.toUpperCase();
        console.log("a key was pressed", letter);
        // correct guess
        if (input.includes(letter)) {
          if (!correctGuesses.includes(letter)) {
            setCorrectGuesses((currentLetters) => [...currentLetters, letter]);
            setDisplayMessage("Correct! Keep Playing...");
          } else {
            setDisplayMessage("Letter already used");
          }
          //wrong guess
        } else {
          if (!wrongGuesses.includes(letter)) {
            setWrongGuesses((currentLetters) => [...currentLetters, letter]);
            setDisplayMessage("Wrong guess! Try again...");
            setNrOfGuesses((prev) => prev - 1);
            console.log(`guesses ${nrOfGuesses}`);
          } else {
            setDisplayMessage("Letter already used");
          }
        }
      }
    };

    // add handler
    window.addEventListener("keydown", handleKeyDown);

    // remove handler
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [correctGuesses, wrongGuesses, isPlaying]);

  console.log(`wrong letter ${wrongGuesses}`);
  console.log(`correct letter ${correctGuesses}`);
  console.log(typeof correctGuesses);

  return (
    <>
      <div className="card">
        <h1 className="title">Hangman</h1>
        <form onSubmit={handleStartBtn}>
          <label>Type the secret word and start the game! </label>
          <input
            type="password"
            className="guess"
            placeholder="Please type a secret word"
            onChange={(e) => setInput(e.target.value.toUpperCase())}
          />
          <button className="start_game">Start Game</button>
        </form>
        <h2 className="input">
          Type a letter:
          <HiddenWord input={input} correctGuesses={correctGuesses} />
        </h2>
        <WrongGuesses wrongGuesses={wrongGuesses} />
        <div className="number-of-guesses">
          Guesses left: {nrOfGuesses} of 5
        </div>
        {displayMessage}
        <FinalMessage
          correctGuesses={correctGuesses}
          nrOfGuesses={nrOfGuesses}
          input={input}
          setIsPlaying={setIsPlaying}
        />
      </div>
    </>
  );
}

export default App;
