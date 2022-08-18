import React from "react";
import Header from "../components/Layout/Header";
import Nav from "../components/Layout/Nav";
import NewPaletteForm from "../components/Palette/NewPaletteForm";

const NewPalettePage = () => {
  const newPaletteColors = [
    {
      name: "Your Color 1",
      color: "#aabbcc",
    },
    {
      name: "Your Color 2",
      color: "#373737",
    },
    {
      name: "Your Color 3",
      color: "#C15555",
    },
    {
      name: "Your Color 4",
      color: "#F1C7C7",
    },
  ];

  return (
    <div>
      <Header />
      <Nav />
      <NewPaletteForm initialColors={newPaletteColors} />
    </div>
  );
};

export default NewPalettePage;
