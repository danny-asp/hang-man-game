import React, { useEffect, useState } from "react";
import GameCotext from "./game-context";
import axios from "axios";
import GameModal from "./../UI/Modal";

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

const ContextProvider = (props) => {
  const [game, setGame] = useState({});
  const [newGame, setNewGame] = useState(true);
  const [gameStatus, setGameStatus] = useState("");
  const [currentWord, setCurrentWord] = useState("");
  const [availableLetters, setAvailableLetters] = useState([]);
  const [correctLetters, setCorrectLettes] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [wordDeskription, setWordDescription] = useState("");
  const [playerLife, setPlayerLife] = useState(6);
  // console.log("ContextProvider rendered");

  //   FETCHING DATA
  useEffect(() => {
    const fetchData = async () => {
      setGameStatus("Lodaing");
      const response = await axios.get("https://random-words-api.vercel.app/word/");
      setCurrentWord(response.data[0].word);
      setWordDescription(response.data[0].definition);
      let firstAndLastLetters = [];
      firstAndLastLetters.push(response.data[0].word[0].toLowerCase());
      firstAndLastLetters.push(response.data[0].word.split("").reverse().join("")[0]);
      setCorrectLettes(firstAndLastLetters);

      let availableLetters = [...new Set(response.data[0].word.toLowerCase())];
      let tempAlphabet = [...alphabet];
      tempAlphabet = tempAlphabet.filter((val) => !availableLetters.includes(val));
      let lettersNeededCount = response.data[0].word.length * 2 - availableLetters.length;
      let shuffledRest = getMultipleRandom(tempAlphabet, lettersNeededCount);

      if (lettersNeededCount > 18) {
        availableLetters = alphabet;
      } else if (lettersNeededCount > 6 && lettersNeededCount < 18) {
        availableLetters = [...shuffledRest, ...availableLetters];
      } else {
        shuffledRest = getMultipleRandom(tempAlphabet, 12 - availableLetters.length);
        availableLetters = [...shuffledRest, ...availableLetters];
      }
      availableLetters = availableLetters.sort((a, b) => 0.5 - Math.random());
      setAvailableLetters(availableLetters);
      setGameStatus("playing");
      setNewGame(false);
    };

    if (newGame) {
      setCurrentWord("");
      setAvailableLetters([]);
      setIncorrectLetters([]);
      setCorrectLettes([]);
      setPlayerLife(6);
      fetchData();
    } else {
      localStorage.setItem("game", JSON.stringify(game));
    }
  }, [newGame, game]);

  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }

  const playerLifeChanger = () => {
    setPlayerLife((prev) => prev - 1);
  };

  const onNewGameHandler = () => {
    setNewGame(true);
  };

  const onSaveGameHandler = () => {
    setGame(gameContext);
    console.log(gameContext);
    localStorage.setItem("game", JSON.stringify(game));
  };

  const onLoadGameHandler = () => {
    const gameObject = JSON.parse(localStorage.getItem("game"));
    console.log(gameObject.correctWord);
    setCurrentWord(gameObject.correctWord);
    setAvailableLetters(gameObject.availableLetters);
    setCorrectLettes(gameObject.correctLetters);
    setIncorrectLetters(gameObject.incorrectLetters);
    setPlayerLife(gameObject.playerLife);
  };

  const onSelectedLetterHandler = (event) => {
    event.target.setAttribute("disabled", "");
    event.target.className += " disabled";

    if (currentWord.includes(event.target.id)) {
      setCorrectLettes((prev) => [...prev, event.target.id]);
    } else {
      setIncorrectLetters((prev) => [...prev, event.target.id]);
      playerLifeChanger();
    }
    let curWordLength = [...new Set(currentWord)].length;
    if (curWordLength - 1 === correctLetters.length) {
      alert("You won");
      onNewGameHandler();
    }
    if (playerLife === 1) {
      alert("you lose");
      onNewGameHandler();
    }
    // setGame(gameContext);
  };

  const gameContext = {
    newGame: true,
    gameStatus: gameStatus,
    correctWord: currentWord,
    availableLetters: availableLetters,
    correctLetters: correctLetters,
    incorrectLetters: incorrectLetters,
    playerLife: playerLife,
    correctWordDescription: wordDeskription,
    gameStatusChanger: () => {},
    correctWordChaner: () => {},
    playerLifeChanger: () => {},
    onLetterPick: onSelectedLetterHandler,
    test: onNewGameHandler,
    save: onSaveGameHandler,
    load: onLoadGameHandler
  };

  return (
    <React.Fragment>
      <div>
        <GameCotext.Provider value={gameContext}>{props.children}</GameCotext.Provider>
        {/* {playerLife < 1 && (
          <div>
            <GameModal />
          </div>
        )} */}
      </div>
    </React.Fragment>
  );
};

export default ContextProvider;
