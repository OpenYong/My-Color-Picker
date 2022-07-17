import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Layout/Header";
import Palette from "../components/Palette/Palette";
import dummyData from "../dummy-data";
import ColorsContext from "../store/colors-context";
import { generatePalette } from "../util/colorHelper";

const PalettePage = () => {
  const params = useParams();
  const paletteId = params.paletteId;

  const ColorsCtx = useContext(ColorsContext);

  const selectedPalette = ColorsCtx.colors.find(
    (element) => element.id === paletteId
  );

  return (
    <div>
      <Header />
      <Palette palette={generatePalette(selectedPalette)} />
    </div>
  );
};

export default PalettePage;
