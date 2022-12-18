import { useEffect, useState } from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker";
import Title from "./components/Title";

function App() {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [name, setName] = useState("");
  const [palette, setPalette] = useState(
    localStorage.getItem("palette")
      ? JSON.parse(localStorage.getItem("palette"))
      : []
  );

  //console.log(palette);
  const handleChangeColor = (e) => {
    if (e.target.value.length === 7) {
      //setCurrentColor(e.target.value);
      console.log("Input correcto");
      setCurrentColor(e.target.value);
    }
  };
  const handleColor = (e) => {
    //console.log(e.target.value);
    setCurrentColor(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const agregarColor = (e) => {
    e.preventDefault();
    if (currentColor.at(0) !== "#") return;
    if (currentColor.length !== 7) return;
    if (name.trim() === "" || name.length === 0) return;

    let singleColor = {
      id: window.crypto.randomUUID(),
      nombre: name,
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
      <Title>Color Save</Title>
      <ColorPicker
        handleChangeColor={handleChangeColor}
        handleColor={handleColor}
        handleName={handleName}
        agregarColor={agregarColor}
        eliminarColor={eliminarColor}
        currentColor={currentColor}
        name={name}
        palette={palette}
      />
    </div>
  );
}

export default App;
