import React, { useEffect } from "react";
import "../styles/InputColor.scss";
/**
 * onChange={((e) => handleChangeColor, handleColor)}
          value={currentColor}
 */
const InputColor = ({
  handleChangeColor,
  handleColor,
  currentColor,
  styleColor,
}) => {
  return (
    <>
      <span style={styleColor} className="color-top"></span>
      <span style={styleColor} className="color-bottom"></span>
      <span style={styleColor} className="color-left"></span>
      <span style={styleColor} className="color-right"></span>

      <input
        className="input-color"
        type="color"
        onChange={((e) => handleChangeColor, handleColor)}
        value={currentColor}
      />
    </>
  );
};

export default InputColor;
