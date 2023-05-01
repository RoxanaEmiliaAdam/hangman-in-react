import React, { useState } from "react";

import "./index.css";

function App() {
  return (
    <>
      <div className="card">
        <h1 class="title">Hangman</h1>

        <label for="pass">Word to guess: </label>
        <input type="password" id="guess" />
        <div class="btn-container">
          <button class="start_game">Start Game</button>
          <button class="new_game">New Game</button>
        </div>
        <p class="guesses_left">
          Wrong Guesses:
          <span class="number_of_guesses"> </span>
        </p>
        <p class="incorrect_guesses">
          Incorrect Guesses:
          <span class="incorrect"></span>
        </p>
        <h2 class="input">
          Type a letter:
          <summary class="letters"></summary>
        </h2>
        <h3 class="message"></h3>
      </div>
    </>
  );
}

export default App;
