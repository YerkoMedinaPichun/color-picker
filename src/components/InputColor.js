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
        className="input-color"
        type="color"
        onChange={((e) => handleChangeColor, handleColor)}
        value={currentColor}
      />
    </div>
  );
};

export default InputColor;
