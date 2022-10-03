import React, { useContext } from "react";
import "./AvailableLetters.css";

import GameCotext from "../store/game-context";

const AvailableLetters = () => {
  // console.log("rendered available");
  const gameCtx = useContext(GameCotext);
  const avlLetters = [...gameCtx.availableLetters];

  return avlLetters.map((singleLetter) => {
    if (gameCtx.correctLetters.includes(singleLetter)) {
      return (
        <button
          id={singleLetter}
          key={Math.random()}
          className="word-button disabled"
          onClick={gameCtx.onLetterPick}
          disabled
        >
          {singleLetter.toUpperCase()}
        </button>
      );
    } else if (gameCtx.incorrectLetters.includes(singleLetter)) {
      return (
        <button
          id={singleLetter}
          key={Math.random()}
          className="word-button disabled"
          onClick={gameCtx.onLetterPick}
          disabled
        >
          {singleLetter.toUpperCase()}
        </button>
      );
    } else {
      return (
        <button id={singleLetter} key={Math.random()} className="word-button" onClick={gameCtx.onLetterPick}>
          {singleLetter.toUpperCase()}
        </button>
      );
    }
  });
};

export default AvailableLetters;
