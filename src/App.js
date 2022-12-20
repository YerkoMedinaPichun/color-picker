import { useState } from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker";
import Title from "./components/Title";

function App() {
  const [currentColor, setCurrentColor] = useState("#f0f0f0");
  const [nameColor, setNameColor] = useState("");
  const [palette, setPalette] = useState(
    localStorage.getItem("palette")
      ? JSON.parse(localStorage.getItem("palette"))
      : []
  );

  //console.log(palette);
  const handleChangeColor = (e) => {
    if (e.target.value.length === 7) {
      //setCurrentColor(e.target.value);
      setCurrentColor(e.target.value);
    }
  };
  const handleColor = (e) => {
    //console.log(e.target.value);
    setCurrentColor(e.target.value);
  };

  const handleName = (e) => {
    setNameColor(e.target.value);
    console.log(e.target.value);
  };

  const agregarColor = (e) => {
    e.preventDefault();
    if (currentColor.at(0) !== "#") return;
    if (currentColor.length !== 7) return;
    if (nameColor.trim() === "" || nameColor.length === 0) return;

    let singleColor = {
      id: window.crypto.randomUUID(),
      nombre: nameColor,
      color: currentColor,
    };
    // console.log(singleColor);
    setPalette([...palette, singleColor]);
    //localStorage.setItem([singleColor.nombre], JSON.stringify(singleColor));
    localStorage.setItem("palette", JSON.stringify([...palette, singleColor]));
    // console.log(localStorage);
    // console.log(typeof localStorage);
    // console.log(Object.keys(localStorage));
  };

  const eliminarColor = (e) => {
    e.preventDefault();

    const paletaLocalStorage = JSON.parse(localStorage.getItem("palette"));
    const idColor = e.target.id;
    console.log(paletaLocalStorage);
    const newPaletaLocalStorage = paletaLocalStorage.filter(
      (color) => color.id !== idColor
    );
    setPalette(newPaletaLocalStorage);
    localStorage.setItem("palette", JSON.stringify(newPaletaLocalStorage));
  };

  return (
    <div className="app">
      <Title />
      <ColorPicker
        handleChangeColor={handleChangeColor}
        handleColor={handleColor}
        handleName={handleName}
        agregarColor={agregarColor}
        eliminarColor={eliminarColor}
        currentColor={currentColor}
        name={nameColor}
        palette={palette}
      />
    </div>
  );
}

export default App;
