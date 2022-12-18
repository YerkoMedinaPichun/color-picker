import React from "react";
import "../styles/Button.scss";

const Button = ({ text, agregarColor }) => {
  return (
    <input
      className="button"
      type="submit"
      onClick={agregarColor}
      value={text}
    />
  );
};

export default Button;
