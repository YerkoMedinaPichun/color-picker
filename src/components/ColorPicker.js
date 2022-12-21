import React from "react";
import "../styles/ColorPicker.scss";
import Button from "./Button";
import Colores from "./Colores";
import InputColor from "./InputColor";

import Paleta from "./Paleta";

const ColorPicker = ({
  handleChangeColor,
  handleColor,
  currentColor,
  nameColor,
  handleName,
  agregarColor,
  palette,
  eliminarColor,
  styleColor,
}) => {
  return (
    <>
      <form className="color-picker">
        <InputColor
          handleChangeColor={handleChangeColor}
          handleColor={handleColor}
          currentColor={currentColor}
          styleColor={styleColor}
        />
        <div className="contenedor-input">
          <label htmlFor="hexadecimal">#</label>
          <input
            className="input-text input-text--hex"
            id="hexadecimal"
            type="text"
            placeholder="#000000"
            required
            maxLength="7"
            value={currentColor}
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
            value={nameColor}
            onChange={handleName}
            required
          />
        </div>
        <Button text="Agregar Color" agregarColor={agregarColor} />
      </form>
      <div className="contenedor-paleta">
        {palette.length !== 0 ? (
          <Paleta palette={palette} eliminarColor={eliminarColor} />
        ) : null}
      </div>
      <section className="seccion-variables">
        <Colores title="css" palette={palette} />
        <Colores title="scss/sass" palette={palette} />
        <Colores title="less" palette={palette} />
      </section>
    </>
  );
};

export default ColorPicker;
