import React from "react";

const GameCotext = React.createContext({
  newGame: true,
  gameStatus: "",
  correctWord: "",
  availableLetters: [],
  correctLetters: [],
  incorrectLetters: [],
  playerLife: 6,
  correctWordDescription: "",
  gameStatusChanger: () => {},
  correctWordChaner: () => {},
  playerLifeChanger: () => {},
  onLetterPick: () => {},
  test: () => {},
  save: () => {},
  load: () => {}
});

export default GameCotext;
