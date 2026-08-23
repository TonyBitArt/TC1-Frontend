import { useState } from "react";
import InputField from "../../common/InputField";

function SecretWordSetUp({ playersInformation, setCurrentGameScreen }) {
  const [secretWord, setSecretWord] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!secretWord.trim()) {
      setError("Error: Debe ingresar una palabra secreta.");
      return;
    }

    setCurrentGameScreen("GameTurn");
  };

  return (
    <div>
      <div>
        <h2>El sistema ha decidido:</h2>
        <p>
          El jugador que ingresa la palabra es:{" "}
          <strong>{playersInformation?.firstPlayer || "Jugador 1"}</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Ingrese la palabra secreta:"
          value={secretWord}
          onChange={(e) => {
            setSecretWord(e.target.value);
            setError("");
          }}
          error={error}
          type="password"
        />

        <button type="submit">Aceptar</button>
      </form>

      <button onClick={() => setCurrentGameScreen("PlayerSetUp")}>
        Volver
      </button>
    </div>
  );
}

export default SecretWordSetUp;
