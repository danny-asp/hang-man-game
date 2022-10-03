import React, { useContext } from "react";
import "./WordGuess.css";
import GameCotext from "../store/game-context";

const WordGuess = () => {
  const gameCtx = useContext(GameCotext);

  return (
    <React.Fragment>
      {gameCtx.correctWord
        .toLowerCase()
        .split("")
        .map((letter) => {
          if (gameCtx.correctLetters.includes(letter)) {
            return (
              <div key={Math.random()} className="word">
                {letter}
              </div>
            );
          } else {
            return <div key={Math.random()} className="word"></div>;
          }
        })}
    </React.Fragment>
  );
};

export default WordGuess;
