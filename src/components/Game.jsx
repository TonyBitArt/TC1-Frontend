import { useState } from "react";
import PlayerSetUp from "./PlayerSetup";
import SecretWordSetUp from "./SecretWordSetUp";
import GameTurn from "./GameTurn";

function Game({ setCurrentScreen }) {
  const [playersInformation, setPlayersInformation] = useState(null);
  const [currentGameScreen, setCurrentGameScreen] = useState("PlayerSetUp");
  const [gameData, setGameData] = useState("");
  const [playerTurn, setPlayerTurn] = useState("");

  return (
    <div>
      {currentGameScreen === "PlayerSetUp" && (
        <PlayerSetUp
          playersInformation={playersInformation}
          setPlayersInformation={setPlayersInformation}
          setCurrentGameScreen={setCurrentGameScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}

      {currentGameScreen === "SecretWordSetUp" && (
        <SecretWordSetUp
          playersInformation={playersInformation}
          setCurrentGameScreen={setCurrentGameScreen}
        />
      )}

      {currentGameScreen === "GameTurn" && (
        <GameTurn
          setCurrentGameScreen={setCurrentGameScreen}
          gameData={gameData}
          setGameData={setGameData}
        />
      )}
    </div>
  );
}

export default Game;
