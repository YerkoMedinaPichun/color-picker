import { useEffect, useState } from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker";
import Title from "./components/Title";

function App() {
  // const [color, setColor] = useState("#000000");
  // const [hex, setHex] = useState(color);
  // const [rgb, setRgb] = useState(convertColor(color, "rgb"));
  // const [colorName, setColorName] = useState("");
  const [paletteName, setPaletteName] = useState("");
  const [currentColor, setCurrentColor] = useState({
    id: "",
    color: "#000000",
    hex: "#000000",
    rgb: [0, 0, 0],
    colorName: "",
  });
  const [currentPalette, setCurrentPalette] = useState({
    id: "",
    paletteName: "",
    colors: [],
  });
  const [allPalette, setAllPalette] = useState([]);

  //funciones y manejadores de eventos

  const handleChangeInputColor = (e) => {
    // if (e.target.value.match(/^[0-9a-fA-F]{0,6}$/)) {
    //   setErrors([...errors], []);
    // }
    // setColor(e.target.value);
    // setHex(e.target.value);
    // console.log(convertColor(e.target.value, "rgb"));
    // setRgb(convertColor(e.target.value, "rgb"));
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

    //setHex(e.target.value);
    setCurrentColor({
      ...currentColor,
      hex: e.target.value,
    });

    if (e.target.value.length !== 7) return;
    //setColor(e.target.value);
    //setRgb(convertColor(e.target.value, "rgb"));
    //console.log(e.target.value.length === 7);

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
    //setRgb(newRgb);
    //console.log(convertColor(newRgb, "hex"));
    //setColor(convertColor(newRgb, "hex"));
    //setHex(convertColor(newRgb, "hex"));
    setCurrentColor({
      ...currentColor,
      color: convertColor(newRgb, "hex"),
      hex: convertColor(newRgb, "hex"),
      rgb: newRgb,
    });
  };

  const handleChangeInputTextColorName = (e) => {
    //setColorName(e.target.value);
    setCurrentColor({
      ...currentColor,
      colorName: e.target.value,
    });
  };

  const handleBlurInputTextHex = (e) => {
    console.log(`${e.target.value} ha dejado de tener el foco`);
    if (e.target.value.length === 4) {
      e.target.value = e.target.value + e.target.value.slice(1);
      //console.log(e.target.value.slice(1));
      //setHex(e.target.value);
      //setColor(e.target.value);
      //setRgb(convertColor(e.target.value, "rgb"));
      setCurrentColor({
        ...currentColor,
        color: e.target.value,
        hex: e.target.value,
        rgb: convertColor(e.target.value, "rgb"),
      });
    }

    if (e.target.value.length < 7) {
      //setHex("#000000");
      //setColor("#000000");
      //setRgb(["0", "0", "0"]);
      setCurrentColor({
        ...currentColor,
        color: "#000000",
        hex: "#000000",
        rgb: [0, 0, 0],
      });
    }
  };
  const handleChangeInputTextPaletteName = (e) => {
    setPaletteName(e.target.value);
  };

  const addPalette = (e) => {
    e.preventDefault();
    //setCurrentColor({ id: crypto.randomUUID(), hex, rgb, colorName });

    // const newPalette = {
    //   id: window.crypto.randomUUID(),
    //   paletteName,
    //   colors: [],
    // };

    // const newColor = {
    //   id: window.crypto.randomUUID(),
    //   hex,
    //   rgb,
    //   colorName,
    // };
    // newPalette.colors.push(newColor);
    // setAllPalette([...allPalette, newPalette]);
  };

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
      //return [r.toString(), g.toString(), b.toString()];
      return [r, g, b];
    }
    if (toConvert === "hex") {
      //console.log(codigo);
      let rHex = codigo[0].toString(16);
      if (rHex.length === 1) rHex = "0" + rHex;
      //console.log(rHex);
      let gHex = codigo[1].toString(16);
      if (gHex.length === 1) gHex = "0" + gHex;
      //console.log(gHex);
      let bHex = codigo[2].toString(16);
      if (bHex.length === 1) bHex = "0" + bHex;
      //console.log(bHex);
      const hex = `#${rHex}${gHex}${bHex}`;
      //console.log(hex);
      return hex;
    }
  }

  return (
    <div className="app">
      <Title />
      <ColorPicker
        // color={color}
        handleChangeInputColor={handleChangeInputColor}
        //hex={hex}
        handleChangeInputTextHex={handleChangeInputTextHex}
        //rgb={rgb}
        handleChangeInputTextRgb={handleChangeInputTextRgb}
        //colorName={colorName}
        handleChangeInputTextColorName={handleChangeInputTextColorName}
        handleBlurInputTextHex={handleBlurInputTextHex}
        validateInputTextRgb={validateInputTextRgb}
        currentColor={currentColor}
        paletteName={paletteName}
        handleChangeInputTextPaletteName={handleChangeInputTextPaletteName}
        addPalette={addPalette}
      />
    </div>
  );
}

export default App;
