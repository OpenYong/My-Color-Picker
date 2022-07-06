import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import NewPalettePage from "./pages/NewPalettePage";
import PalettePage from "./pages/PalettePage";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/palette/new" element={<NewPalettePage />} />
        <Route path="/palette/:paletteId" element={<PalettePage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
