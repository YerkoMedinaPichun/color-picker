import { useEffect, useState } from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker";
import Title from "./components/Title";

function App() {
  const [currentColor, setCurrentColor] = useState({
    id: crypto.randomUUID(),
    color: "#000000",
    hex: "#000000",
    rgb: [0, 0, 0],
    colorName: "",
  });
  const [palette, setPalette] = useState(
    localStorage.getItem("palette")
      ? JSON.parse(localStorage.getItem("palette"))
      : []
  );
  // const [paletteName, setPaletteName] = useState("");
  // const [currentPalette, setCurrentPalette] = useState({
  //   id: "",
  //   paletteName: "",
  //   colors: [],
  // });
  // const [allPalette, setAllPalette] = useState([]);

  //funciones y manejadores de eventos

  const handleChangeInputColor = (e) => {
    setCurrentColor({
      ...currentColor,
      color: e.target.value,
      hex: e.target.value,
      rgb: convertColor(e.target.value, "rgb"),
    });
  };

  const handleChangeInputTextHex = (e) => {
    console.log("cambiando valor hexadecimal");
    if (e.target.value.at(0) !== "#") e.target.value = "#" + e.target.value;

    setCurrentColor({
      ...currentColor,
      hex: e.target.value,
    });

    if (e.target.value.length !== 7) return;
    setCurrentColor({
      ...currentColor,
      color: e.target.value,
      hex: e.target.value,
      rgb: convertColor(e.target.value, "rgb"),
    });
  };

  const handleChangeInputTextRgb = (e) => {
    console.log("cambiando valor rgb");
    validateInputTextRgb(e);
    const newRgb = [...currentColor.rgb];
    switch (e.target.id) {
      case "r":
        newRgb[0] = parseInt(e.target.value);
        break;
      case "g":
        newRgb[1] = parseInt(e.target.value);
        break;
      case "b":
        newRgb[2] = parseInt(e.target.value);
        break;
      default:
        return;
    }
    setCurrentColor({
      ...currentColor,
      color: convertColor(newRgb, "hex"),
      hex: convertColor(newRgb, "hex"),
      rgb: newRgb,
    });
  };

  const handleChangeInputTextColorName = (e) => {
    setCurrentColor({
      ...currentColor,
      colorName: e.target.value,
    });
  };

  const handleBlurInputTextHex = (e) => {
    console.log(`${e.target.value} ha dejado de tener el foco`);
    if (e.target.value.length === 4) {
      e.target.value = e.target.value + e.target.value.slice(1);
      setCurrentColor({
        ...currentColor,
        color: e.target.value,
        hex: e.target.value,
        rgb: convertColor(e.target.value, "rgb"),
      });
    }

    if (e.target.value.length < 7) {
      setCurrentColor({
        ...currentColor,
        color: "#000000",
        hex: "#000000",
        rgb: [0, 0, 0],
      });
    }
  };
  const addColor = (e) => {
    e.preventDefault();
    setCurrentColor({ ...currentColor, id: crypto.randomUUID() });
    setPalette([...palette, currentColor]);
    localStorage.setItem("palette", JSON.stringify([...palette, currentColor]));
  };
  const deleteColor = (e) => {
    console.log(e.target.id);
    console.log(palette.filter((el) => el.id !== e.target.id));
    localStorage.setItem(
      "palette",
      JSON.stringify(palette.filter((el) => el.id !== e.target.id))
    );
    setPalette(JSON.parse(localStorage.getItem("palette")));
  };
  // const handleChangeInputTextPaletteName = (e) => {
  //   setPaletteName(e.target.value);
  // };

  // const addPalette = (e) => {
  //   e.preventDefault();
  //   console.log(currentColor);
  //   console.log(paletteName);
  //   setCurrentColor({ ...currentColor, id: crypto.randomUUID() });

  //   setCurrentPalette({
  //     ...currentPalette,
  //     id: crypto.randomUUID(),
  //     paletteName,
  //     colors: [...currentPalette.colors, currentColor],
  //   });

  //   localStorage.setItem([paletteName], JSON.stringify([...currentPalette]));

  //   console.log(currentPalette);
  // };

  const validateInputTextRgb = (e) => {
    //Si la longitud de algún input (R G B) es = 0, significa que no hay nada, si no hay nada, entonces agregamos un 0 para que siempre tenga un valor y no provoque errores.
    if (e.target.value.length === 0) e.target.value = 0;
    if (e.target.value.length > 1) {
      if (e.target.value.at(0) === "0") {
        e.target.value = e.target.value.slice(1);
      }
    }
    if (e.target.value > 255 || e.target.value.length > 3) {
      e.target.value = 255;
    }
  };

  function convertColor(codigo, toConvert) {
    if (toConvert === "rgb") {
      const r = parseInt(codigo.substring(1, 3), 16);
      const g = parseInt(codigo.substring(3, 5), 16);
      const b = parseInt(codigo.substring(5, 7), 16);
      return [r, g, b];
    }

    if (toConvert === "hex") {
      let rHex = codigo[0].toString(16);
      if (rHex.length === 1) rHex = "0" + rHex;

      let gHex = codigo[1].toString(16);
      if (gHex.length === 1) gHex = "0" + gHex;

      let bHex = codigo[2].toString(16);
      if (bHex.length === 1) bHex = "0" + bHex;

      const hex = `#${rHex}${gHex}${bHex}`;

      return hex;
    }
  }

  return (
    <div className="app">
      <Title />
      <ColorPicker
        handleChangeInputColor={handleChangeInputColor}
        handleChangeInputTextHex={handleChangeInputTextHex}
        handleChangeInputTextRgb={handleChangeInputTextRgb}
        handleChangeInputTextColorName={handleChangeInputTextColorName}
        handleBlurInputTextHex={handleBlurInputTextHex}
        validateInputTextRgb={validateInputTextRgb}
        currentColor={currentColor}
        addColor={addColor}
        deleteColor={deleteColor}
        palette={palette}
        // paletteName={paletteName}
        // handleChangeInputTextPaletteName={handleChangeInputTextPaletteName}
        // addPalette={addPalette}
      />
    </div>
  );
}

export default App;
