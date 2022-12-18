import React from "react";
import "../styles/Paleta.scss";

const VariablesScss = ({ palette }) => {
  //console.log(palette);
  return (
    <div>
      <h3
        style={{
          userSelect: "none",
        }}
      >
        SCSS/SASS
      </h3>
      <div
        className="contenedor-variables"
        style={{ width: "30rem", border: "1px solid black" }}
      >
        {palette.map((singlePalette) => (
          <span key={singlePalette.id}>
            ${singlePalette.nombre}: {singlePalette.color};
            <br />
          </span>
        ))}
      </div>
    </div>
  );
};

export default VariablesScss;
