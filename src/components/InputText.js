import React from "react";
import "../styles/InputText.scss";
const InputText = ({
  classname,
  id,
  placeholder,
  currentColor,
  handleChangeColor,
  handleColor,
  maxlength,
  name,
  handleName,
}) => {
  console.log(typeof handleChangeColor, handleColor, handleName);
  return (
    <input
      type="text"
      className={`input-text ${classname ? classname : ""}`.trim()}
      id={id}
      placeholder={placeholder}
      required
      maxLength={maxlength ? maxlength : null}
      value={currentColor ? currentColor : name}
      onChange={
        ((e) => (handleChangeColor ? handleChangeColor : ""),
        handleColor ? handleColor : "",
        handleName ? handleName : "")
      }
    />
  );
};

export default InputText;
