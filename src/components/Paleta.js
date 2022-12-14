import React from "react";
import "../styles/Paleta.scss";

const Paleta = ({ palette, deleteColor }) => {
  return (
    <div className="paleta">
      {palette.map((singlePalette, index) => (
        <div
          key={`${singlePalette.id}`}
          className="color"
          style={{
            backgroundColor: `${singlePalette.color}`,
          }}
        >
          <ion-icon
            onClick={deleteColor}
            id={singlePalette.id}
            name="trash-outline"
            className="icono-eliminar"
          ></ion-icon>
        </div>
      ))}
    </div>
  );
};

export default Paleta;
