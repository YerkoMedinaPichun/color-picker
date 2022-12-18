import React from "react";
import "../styles/Colores.scss";

const Colores = ({ title, palette }) => {
  return (
    <section className="section-variables">
      <h3>{title.toUpperCase()}</h3>
      <div className="contenedor-variables">
        {palette.map((singlePalette) => (
          <span className="variable" key={singlePalette.id}>
            {title === "css"
              ? "--"
              : title === "scss/sass"
              ? "$"
              : title === "less"
              ? "@"
              : null}
            {singlePalette.nombre}: {singlePalette.color};
            <br />
          </span>
        ))}
      </div>
    </section>
  );
};

export default Colores;
