import { useState } from "react";
import InputField from "../../common/InputField";

function PlayerSetUp({
  playersInformation,
  setPlayersInformation,
  setCurrentGameScreen,
  setCurrentScreen,
}) {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  const [errors, setErrors] = useState({
    playerOne: "",
    playerTwo: "",
  });

  const handleValidation = () => {
    const newErrors = {
      playerOne: "",
      playerTwo: "",
    };

    if (!playerOneName.trim()) {
      newErrors.playerOne = "Error: Ingrese el nombre del Jugador 1";
    }

    if (!playerTwoName.trim()) {
      newErrors.playerTwo = "Error: Ingrese el nombre del Jugador 2";
    }

    setErrors(newErrors);

    if (newErrors.playerOne || newErrors.playerTwo) {
      return;
    }

    return true;
  };

  const handleStartGame = async (event) => {
    event.preventDefault();

    if (handleValidation() !== true) return;
    const requestBody = {
      playerOne: playerOneName,
      playerTwo: playerTwoName,
    };

    try {
      const response = await fetch("http://localhost:3001/api/start", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      setPlayersInformation(data);
      setCurrentGameScreen("SecretWordSetUp");
    } catch (error) {
      console.error("Hubo un error de conexion:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleStartGame}>
        <InputField
          label="Jugador 1:"
          value={playerOneName}
          onChange={(e) => {
            setPlayerOneName(e.target.value);

            setErrors((prev) => ({
              ...prev,
              playerOne: "",
            }));
          }}
          error={errors.playerOne}
        />

        <InputField
          label="Jugador 2:"
          value={playerTwoName}
          onChange={(e) => {
            setPlayerTwoName(e.target.value);

            setErrors((prev) => ({
              ...prev,
              playerTwo: "",
            }));
          }}
          error={errors.playerTwo}
        />

        <button type="submit">Jugar</button>
      </form>

      <button
        onClick={() => {
          setCurrentScreen("MainMenu");
        }}
      >
        {" "}
        Volver{" "}
      </button>
    </div>
  );
}

export default PlayerSetUp;
