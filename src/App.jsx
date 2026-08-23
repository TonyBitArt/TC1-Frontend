import { useState } from "react";
import MainMenu from "./components/MainMenu";
import Game from "./components/Game";

function App() {
  const [currentScreen, setCurrentScreen] = useState("MainMenu");

  return (
    <>
      {currentScreen === "MainMenu" && (
        <MainMenu setCurrentScreen={setCurrentScreen} />
      )}

      {currentScreen === "Game" && <Game setCurrentScreen={setCurrentScreen} />}
    </>
  );
}

export default App;
