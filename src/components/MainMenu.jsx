function MainMenu({ setCurrentScreen }) {
  return (
    <div>
      <div>
        <h1>Batalla de palabras</h1>
        <p>Selecciona una opcion para empezar</p>

        <button onClick={() => setCurrentScreen("Game")}>Inicio</button>

        <button onClick={() => console.log("Historial")}>Historial</button>

        <button onClick={() => console.log("salir")}>Salir</button>
      </div>
    </div>
  );
}

export default MainMenu;
