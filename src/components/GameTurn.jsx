import { useState } from "react";
import InputField from "../../common/InputField";

function GameTurn({ setCurrentGameScreen, gameData }) {
  const [guessLetter, setGuessLetter] = useState("");

  const handleGuess = async (event) => {
    event.preventDefault();
    if (!guessLetter.trim()) return;

    console.log("Enviando letra al backend:", guessLetter);

    setGuessLetter("");
  };

  return (
    <main>
      <section>
        <div>TURNO ACTUAL</div>
        <h2>Adivina la Palabra</h2>

        <form onSubmit={handleGuess}>
          <InputField
            label="Ingresa una letra:"
            value={guessLetter}
            onChange={(e) => setGuessLetter(e.target.value.toUpperCase())}
            type="text"
          />
          <button type="submit">Adivinar</button>
        </form>

        <button onClick={() => setCurrentGameScreen("PlayerSetUp")}>
          Volver
        </button>
      </section>
    </main>
  );
}

export default GameTurn;
