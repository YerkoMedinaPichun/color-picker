import React from "react";
import "../styles/Paleta.scss";

const VariablesScss = ({ palette }) => {
  return (
    <>
      <h3>SCSS/SASS</h3>
      <div
        className="contenedor-variables"
        style={{ width: "30rem", border: "1px solid black" }}
      >
        {palette.map((singlePalette, index) => (
          <span>
            ${singlePalette.nombre}: {singlePalette.color};
            <br />
          </span>
        ))}
      </div>
    </>
  );
};

export default VariablesScss;
