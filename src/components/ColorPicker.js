import React from "react";
import "../styles/ColorPicker.scss";
import Button from "./Button";
import Colores from "./Colores";
import InputColor from "./InputColor";

import Paleta from "./Paleta";

const ColorPicker = ({
  color,
  handleChangeInputColor,
  hex,
  handleChangeInputTextHex,
  rgb,
  handleChangeInputTextRgb,
  colorName,
  handleChangeInputTextColorName,
  handleBlurInputTextHex,
  // validateInputTextRgb,
  currentColor,
  paletteName,
  handleChangeInputTextPaletteName,
  addPalette,
}) => {
  return (
    <>
      <form className="color-picker" onSubmit={addPalette}>
        <InputColor
          color={currentColor.color}
          handleChangeInputColor={handleChangeInputColor}
        />

        <label htmlFor="hexadecimal">#</label>
        <input
          className="input-text input-text--hex"
          id="hexadecimal"
          type="text"
          placeholder="#000000"
          required
          maxLength="7"
          value={currentColor.hex}
          onChange={handleChangeInputTextHex}
          onBlur={handleBlurInputTextHex}
        />

        <label htmlFor="r">R</label>
        <input
          className="input-text input-text--rgb"
          id="r"
          type="number"
          min="0"
          max="255"
          placeholder="0"
          required
          maxLength="3"
          value={currentColor.rgb[0]}
          //onChange={handleChangeInputTextRgb}
          onChange={handleChangeInputTextRgb}
        />
        <label htmlFor="g">G</label>
        <input
          className="input-text input-text--rgb"
          id="g"
          type="number"
          min="0"
          max="255"
          placeholder="0"
          required
          maxLength="3"
          value={currentColor.rgb[1]}
          onChange={handleChangeInputTextRgb}
        />
        <label htmlFor="b">B</label>
        <input
          className="input-text input-text--rgb"
          id="b"
          type="number"
          min="0"
          max="255"
          placeholder="0"
          required
          maxLength="3"
          value={currentColor.rgb[2]}
          onChange={handleChangeInputTextRgb}
        />

        <label className="label-nombre-color" htmlFor="nombre">
          Nombre del Color
        </label>
        <input
          className="input-text input-nombre-color"
          id="nombre"
          type="text"
          placeholder="color-gris-01"
          required
          value={currentColor.colorName}
          onChange={handleChangeInputTextColorName}
        />

        <label className="label-nombre-paleta" htmlFor="nombrePaleta">
          Nombre de la Paleta
        </label>
        <input
          className="input-text input-nombre-paleta"
          id="nombrePaleta"
          type="text"
          placeholder="Grises"
          required
          value={paletteName}
          onChange={handleChangeInputTextPaletteName}
        />
        <Button text="Agregar Color" />
      </form>
      {/* <div className="contenedor-paleta">
        {palette.length !== 0 ? (
          <Paleta palette={palette} eliminarColor={eliminarColor} />
        ) : null}
      </div>
      <section className="seccion-variables">
        <Colores title="css" palette={palette} />
        <Colores title="scss/sass" palette={palette} />
        <Colores title="less" palette={palette} />
      </section> */}
    </>
  );
};

export default ColorPicker;
