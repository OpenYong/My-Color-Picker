import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import UpdatePalettePage from "./pages/UpdatePalettePage";

import { ColorsProvider } from "./store/colors-context";

const NewPalettePage = React.lazy(() => import("./pages/NewPalettePage"));
const PalettePage = React.lazy(() => import("./pages/PalettePage"));

function App() {
  return (
    <React.Fragment>
      <ColorsProvider>
        <Suspense fallback={<p>Loading Layout</p>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/palette/new" element={<NewPalettePage />} />
            <Route path="/palette/:paletteId" element={<PalettePage />} />
            <Route
              path="/palette/update/:paletteId"
              element={<UpdatePalettePage />}
            />
          </Routes>
        </Suspense>
      </ColorsProvider>
    </React.Fragment>
  );
}

export default App;
