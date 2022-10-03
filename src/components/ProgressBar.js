import React, { useContext } from "react";
import { Progress } from "reactstrap";
import GameCotext from "../store/game-context";

const ProgressBar = () => {
  const gameCtx = useContext(GameCotext);

  return (
    <React.Fragment>
      <div className="m-auto w-50">
        {gameCtx.playerLife > 4 && (
          <Progress value={(100 / 6) * gameCtx.playerLife} color="success">
            {gameCtx.playerLife} lifes left!
          </Progress>
        )}
        {gameCtx.playerLife > 2 && gameCtx.playerLife <= 4 && (
          <Progress value={(100 / 6) * gameCtx.playerLife} color="warning">
            {gameCtx.playerLife} lifes left!
          </Progress>
        )}
        {gameCtx.playerLife <= 2 && (
          <Progress value={(100 / 6) * gameCtx.playerLife} color="danger">
            {gameCtx.playerLife} lifes left!
          </Progress>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProgressBar;
