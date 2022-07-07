import React, { useRef, useState } from "react";
import styles from "./NewPaletteForm.module.css";
import { HexColorPicker } from "react-colorful";

const NewPaletteForm = () => {
  const [colors, setColors] = useState([
    {
      name: "Your Color 1",
      color: "#aabbcc",
    },
    {
      name: "Your Color 2",
      color: "#373737",
    },
    {
      name: "Your Color 2",
      color: "#C15555",
    },
    {
      name: "Your Color 2",
      color: "#F1C7C7",
    },
  ]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [clickedColorBox, setClickedColorBox] = useState();

  const colorContainerClickHandler = (clickedColor) => {
    const clickedColorIndex = colors.findIndex(
      (colorObject) => colorObject.color === clickedColor
    );

    setClickedColorBox(clickedColorIndex);
    setIsPickerOpen((prevState) => !prevState);
  };
  const pickerHandelr = (color, clickedColorBox) => {
    let newColorArry = [...colors];
    newColorArry[clickedColorBox].color = color;
    setColors(newColorArry);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["new-palette"]}>
        {colors.map((color) => (
          <div
            id="colorBox1"
            className={styles["color-container"]}
            onClick={() => colorContainerClickHandler(color.color)}
            style={{ backgroundColor: color.color }}
          ></div>
        ))}
      </div>
      {isPickerOpen && (
        <HexColorPicker
          color={colors[clickedColorBox].color}
          onChange={(color) => pickerHandelr(color, clickedColorBox)}
        />
      )}
    </div>
  );
};

export default NewPaletteForm;
