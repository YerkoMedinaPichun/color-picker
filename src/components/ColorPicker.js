import React, { useState } from "react";
import { useEffect } from "react";
import "../styles/ColorPicker.scss";

import InputColor from "./InputColor";
import InputText from "./InputText";
import Paleta from "./Paleta";
import VariablesCss from "./VariablesCss";
import VariablesScss from "./VariablesScss";

const ColorPicker = ({
  handleChangeColor,
  handleColor,
  currentColor,
  name,
  handleName,
  agregarColor,
  palette,
  eliminarColor,
}) => {
  return (
    <>
      <form className="color-picker">
        <InputColor
          handleChangeColor={handleChangeColor}
          handleColor={handleColor}
          currentColor={currentColor}
        />

        {/* <input
          className="input-color"
          type="color"
          // onChange={handleColor}
          onChange={((e) => handleChangeColor, handleColor)}
          value={currentColor}
          //handleChangeColor={handleChangeColor}
        /> */}

        <div className="contenedor-input">
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

      {/* <Paleta palette={palette} />
      <section className="seccion-variables">
        <VariablesCss palette={palette}></VariablesCss>
        <VariablesScss palette={palette}></VariablesScss>
      </section> */}

      <div
        className="contenedor-paleta"
        style={{
          width: "80%",
          minHeight: "100px",
          border: "1px solid rgb(0,0,0,0.4)",
          boxShadow: "0 5px 15px rgb(0,0,0,0.3)",
          padding: "20px",
          margin: "20px auto",
        }}
      >
        {palette.length !== 0 ? (
          <Paleta palette={palette} eliminarColor={eliminarColor} />
        ) : null}
      </div>
      <section className="seccion-variables">
        <VariablesCss palette={palette}></VariablesCss>
        <VariablesScss palette={palette}></VariablesScss>
      </section>
    </>
  );
};

export default ColorPicker;
