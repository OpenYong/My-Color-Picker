import React from "react";
import Header from "../components/Layout/Header";
import Nav from "../components/Layout/Nav";
import NewPaletteForm from "../components/Palette/NewPaletteForm";

const NewPalettePage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <NewPaletteForm />
    </div>
  );
};

export default NewPalettePage;
