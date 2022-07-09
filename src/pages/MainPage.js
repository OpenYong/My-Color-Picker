import React from "react";
import PaletteThumbnail from "../components/PaletteThumbnail";
import dummyData from "../dummy-data";
import Header from "../components/Layout/Header";

const MainPage = () => {
  const paletteList = dummyData;
  return (
    <>
      <Header />
      <PaletteThumbnail paletteList={paletteList} />
    </>
  );
};

export default MainPage;
