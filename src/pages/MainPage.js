import React, { useContext, useState } from "react";
import PaletteThumbnail from "../components/PaletteThumbnail";
import Header from "../components/Layout/Header";
import Nav from "../components/Layout/Nav";
import ColorsContext from "../store/colors-context";

const MainPage = () => {
  const ColorsCtx = useContext(ColorsContext);
  console.log(ColorsCtx.colors);

  return (
    <>
      <Header />
      <PaletteThumbnail paletteList={ColorsCtx.colors} />
    </>
  );
};

export default MainPage;
