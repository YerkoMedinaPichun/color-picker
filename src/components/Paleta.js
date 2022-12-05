import React from "react";
import "../styles/Paleta.scss";

const Paleta = ({ palette }) => {
  return (
    <div className="contenedor-paleta">
      {palette.map((singlePalette, index) => (
        <div
          key={index}
          className="paleta"
          style={{
            width: "5rem",
            height: "5rem",
            backgroundColor: `${singlePalette.color}`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Paleta;
