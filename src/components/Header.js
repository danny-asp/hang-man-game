import React, { useContext } from "react";
import "./Header.css";
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import GameCotext from "../store/game-context";
import { Spinner } from "reactstrap";

const Header = () => {
  // console.log("header rendered");
  const gameCtx = useContext(GameCotext);
  // console.log(gameCtx.gameStatus);
  return (
    <React.Fragment>
      <h1 className="header">HANGMAN</h1>

      {gameCtx.gameStatus === "Lodaing" && <Spinner color="warning">Loading...</Spinner>}
      {gameCtx.gameStatus === "playing" && <span className="description">{gameCtx.correctWordDescription}</span>}
      <div>{gameCtx.correctWord}</div>
    </React.Fragment>
  );
};

export default Header;
