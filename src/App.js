import React from "react";
import "./App.css";
import Palette from "./components/Palette";
import dummyData from "./dummy-data";
import { generatePalette } from "./util/colorHelper";

function App() {
  return (
    <React.Fragment>
      <Palette palette={generatePalette(dummyData[0])} />
    </React.Fragment>
  );
}

export default App;
