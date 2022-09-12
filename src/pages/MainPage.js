import React, { useContext } from "react";
import PaletteThumbnail from "../components/PaletteThumbnail";
import Header from "../components/Layout/Header";
import ColorsContext from "../store/colors-context";

const MainPage = () => {
  const ColorsCtx = useContext(ColorsContext);

  return (
    <>
      <Header />
      <PaletteThumbnail paletteList={ColorsCtx.colors} />
    </>
  );
};

export default MainPage;
