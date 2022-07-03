import React from "react";
import PaletteThumbnail from "../components/PaletteThumbnail";
import dummyData from "../dummy-data";

const MainPage = () => {
  const paletteList = dummyData;
  return (
    <div>
      <h1>My Colors</h1>
      <PaletteThumbnail paletteList={paletteList} />
    </div>
  );
};

export default MainPage;