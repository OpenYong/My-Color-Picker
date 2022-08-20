import React, { useContext } from "react";
import Header from "../components/Layout/Header";
import Nav from "../components/Layout/Nav";
import NewPaletteForm from "../components/Palette/NewPaletteForm";

import ColorsContext from "../store/colors-context";

import { useParams } from "react-router-dom";

const UpdatePalettePage = () => {
  let { paletteId } = useParams();

  const colorsCtx = useContext(ColorsContext);

  const indexOfColors = colorsCtx.colors.findIndex(
    (color) => color.id === paletteId
  );
  const selectedPalette = colorsCtx.colors[indexOfColors];

  return (
    <div>
      <Header />
      <Nav />
      <NewPaletteForm selectedPalette={selectedPalette} isUpdating={true} />
    </div>
  );
};

export default UpdatePalettePage;
