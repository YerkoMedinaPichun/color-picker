import React from "react";
import "../styles/InputColor.scss";
/**
 * onChange={((e) => handleChangeColor, handleColor)}
          value={currentColor}
 */
const InputColor = ({ handleChangeColor, handleColor, currentColor }) => {
  return (
    <div>
      <input
        type="color"
        className="input-color"
        onChange={((e) => handleChangeColor, handleColor)}
        value={currentColor}
      />
    </div>
  );
};

export default InputColor;
