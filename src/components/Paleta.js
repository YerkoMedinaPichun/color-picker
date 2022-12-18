import React from "react";
import "../styles/Paleta.scss";

const Paleta = ({ palette, eliminarColor }) => {
  return (
    <div className="contenedor-paleta">
      {palette.map((singlePalette, index) => (
        <div
          key={`${singlePalette.id}`}
          className="paleta"
          style={{
            width: "5rem",
            height: "5rem",
            backgroundColor: `${singlePalette.color}`,
            position: "relative",
          }}
        >
          <ion-icon
            onClick={eliminarColor}
            id={singlePalette.id}
            name="trash-outline"
            style={{
              color: "red",
              position: "absolute",
              top: "-1.5rem",
              right: "-1.5rem",
              width: "2.5rem",
              height: "2.5rem",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              opacity: ".8",
              cursor: "pointer",
              backgroundColor: "white",
              padding: "4px",
            }}
          ></ion-icon>
        </div>
      ))}
    </div>
  );
};

export default Paleta;
