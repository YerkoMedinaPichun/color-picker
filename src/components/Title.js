import React from "react";
import "../styles/Title.scss";

const Title = () => {
  return (
    <div>
      <h1>
        <div className="contenedor-logo">
          <img
            className="logo"
            src={require(`../assets/logo.png`)}
            alt="Logo de Color Save"
          />
        </div>
        <span>Color</span>
        <span>Save</span>
      </h1>
    </div>
  );
};

export default Title;
