import React from "react";
import { useParams } from "react-router-dom";
import Palette from "../components/Palette";
import dummyData from "../dummy-data";
import { generatePalette } from "../util/colorHelper";

const PalettePage = () => {
  const params = useParams();
  const paletteId = params.paletteId;

  const selectedPalette = dummyData.find((element) => element.id === paletteId);

  return (
    <div>
      <Palette palette={generatePalette(selectedPalette)} />
    </div>
  );
};

export default PalettePage;
