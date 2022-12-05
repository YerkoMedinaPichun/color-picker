import React, { useState } from "react";
import "../styles/ColorPicker.scss";
import Paleta from "./Paleta";
import VariablesCss from "./VariablesCss";
import VariablesScss from "./VariablesScss";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [name, setName] = useState("");
  const [palette, setPalette] = useState([]);

  const handleColor = (e) => {
    console.log(e.target.value);
    setCurrentColor(e.target.value);
  };

  const handleChangeColor = (e) => {
    if (e.target.value.length === 7) {
      //setCurrentColor(e.target.value);
      console.log("Input correcto");
      setCurrentColor(e.target.value);
    }
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
      nombre: name,
      color: currentColor,
    };
    console.log(singleColor);
    setPalette([...palette, singleColor]);
  };

  return (
    <>
      <form className="color-picker">
        <input
          className="input-color"
          type="color"
          // onChange={handleColor}
          onChange={((e) => handleChangeColor, handleColor)}
          value={currentColor}
          //handleChangeColor={handleChangeColor}
        />
        <div className="contenedor-input">
          <label htmlFor="hexadecimal">Hexadecimal </label>
          <input
            className="input-text input-text--hex"
            id="hexadecimal"
            type="text"
            placeholder="#000000"
            required
            maxLength="7"
            value={currentColor}
            // onChange={handleChangeColor}
            onChange={((e) => handleChangeColor, handleColor)}
          />
        </div>
        <div className="contenedor-input">
          <label htmlFor="nombre">Nombre</label>
          <input
            className="input-text"
            id="nombre"
            type="text"
            placeholder="color-rojo-01"
            value={name}
            onChange={handleName}
            required
          />
        </div>

        <input
          className="button"
          type="submit"
          onClick={agregarColor}
          value="Agregar Color"
        />
      </form>
      {palette.length === 0 ? (
        <>
          <Paleta palette={palette} />
          <VariablesCss palette={palette}></VariablesCss>
          <VariablesScss palette={palette}></VariablesScss>
        </>
      ) : (
        <h2>No hay colores en la paleta</h2>
      )}
    </>
  );
};

export default ColorPicker;
