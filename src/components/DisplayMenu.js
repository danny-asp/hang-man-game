import React, { useContext } from "react";
import "./DisplayMenu.css";
import GameCotext from "../store/game-context";
import OptionButton from "../UI/Button";

const DisplayMenu = () => {
  const gameCtx = useContext(GameCotext);

  return (
    <div className="menu">
      <OptionButton className="btn" name="New Game" fn={gameCtx.test}></OptionButton>
      <OptionButton className="btn" name="Save Game" fn={gameCtx.save}></OptionButton>
      <OptionButton className="btn" name="Load Game" fn={gameCtx.load}></OptionButton>
    </div>
  );
};

export default DisplayMenu;
