import React from "react";
import PaletteThumbnail from "../components/PaletteThumbnail";
import dummyData from "../dummy-data";
import Header from "../components/Layout/Header";
import Nav from "../components/Layout/Nav";

const MainPage = () => {
  const paletteList = dummyData;
  return (
    <>
      <Header />
      <Nav />
      <PaletteThumbnail paletteList={paletteList} />
    </>
  );
};

export default MainPage;
