import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/InputColor.scss";
/**
 * onChange={((e) => handleChangeColor, handleChangeInputColor)}
          value={hex}
 */
const InputColor = ({
  // handleChangeColor,
  // handleChangeInputColor,
  // hex,
  // styleColor,
  color,
  handleChangeInputColor,
}) => {
  return (
    <>
      <span
        style={{ backgroundColor: `${color}` }}
        className="color-top"
      ></span>
      <span
        style={{ backgroundColor: `${color}` }}
        className="color-bottom"
      ></span>
      <span
        style={{ backgroundColor: `${color}` }}
        className="color-left"
      ></span>
      <span
        style={{ backgroundColor: `${color}` }}
        className="color-right"
      ></span>

      <input
        className="input-color"
        type="color"
        value={color}
        onChange={handleChangeInputColor}

        // onChange={((e) => handleChangeColor, handleChangeInputColor)}
        // value={hex}
      />
    </>
  );
};

export default InputColor;
