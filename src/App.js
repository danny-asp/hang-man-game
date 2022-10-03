import "./App.css";
import ContextProvider from "./store/ContextProvider";
import GameCotext from "./store/game-context";
import { useContext } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import ProgressBar from "./components/ProgressBar";
import AvailableLetters from "./components/AvailableLetters";
import WordGuess from "./components/WordGuess";
import DisplayMenu from "./components/DisplayMenu";

function App() {
  const gameCtx = useContext(GameCotext);
  console.log(gameCtx);

  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <DisplayMenu />
        <div className="row mt-3 mb-3">
          <div className="col-lg-1 d-none d-lg-block d-xl-block"></div>
          <div className="col-lg-5 col-12 d-block justify-content-center">
            <Figure />
            <ProgressBar />
          </div>
          <div className="col-lg-6 col-12">
            <AvailableLetters />
          </div>
          <div className="col-12 word-guess">
            <WordGuess />
          </div>
        </div>

        <div>{gameCtx.gameStatus}</div>
      </div>
    </ContextProvider>
  );
}

export default App;
