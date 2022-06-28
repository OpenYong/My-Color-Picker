import React from "react";
import "./App.css";
import Palette from "./components/Palette";
import dummyData from "./dummy-data";

function App() {
  return (
    <React.Fragment>
      <Palette {...dummyData[0]} />
    </React.Fragment>
  );
}

export default App;
