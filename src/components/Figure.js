import React, { useContext } from "react";
import "./Figure.css";
import GameCotext from "../store/game-context";

const Figure = () => {
  const gameCtx = useContext(GameCotext);
  return (
    <React.Fragment>
      <svg height="250" width="200" className="figure-container">
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />

        {/* Head */}
        {gameCtx.playerLife < 6 && <circle cx="140" cy="70" r="20" />}
        {/* Body */}
        {gameCtx.playerLife < 5 && <line x1="140" y1="90" x2="140" y2="150" />}
        {/* Arms*/}
        {gameCtx.playerLife < 4 && <line x1="140" y1="120" x2="120" y2="100" />}
        {gameCtx.playerLife < 3 && <line x1="140" y1="120" x2="160" y2="100" />}
        {/* Legs */}
        {gameCtx.playerLife < 2 && <line x1="140" y1="150" x2="120" y2="180" />}
        {gameCtx.playerLife < 1 && <line x1="140" y1="150" x2="160" y2="180" />}
      </svg>
    </React.Fragment>
  );
};

export default Figure;
