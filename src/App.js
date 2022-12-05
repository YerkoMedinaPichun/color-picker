import { useState } from "react";
import "./App.scss";
import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <div className="app">
      <h1>Color Save</h1>
      <ColorPicker />
    </div>
  );
}

export default App;
