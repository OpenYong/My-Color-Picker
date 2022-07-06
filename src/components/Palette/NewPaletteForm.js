import React, { useState } from "react";
import styles from "./NewPaletteForm.module.css";
import { HexColorPicker } from "react-colorful";

const NewPaletteForm = () => {
  const [color, setColor] = useState("#aabbcc");
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const colorContainerClickHandler = () => {
    setIsPickerOpen((prevState) => !prevState);
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["new-palette"]}>
        <div
          className={styles["color-container"]}
          onClick={colorContainerClickHandler}
          style={{ backgroundColor: color }}
        ></div>
        <div onClick={colorContainerClickHandler}>색상</div>
        <div onClick={colorContainerClickHandler}>색상</div>
        <div onClick={colorContainerClickHandler}>색상</div>
      </div>
      {isPickerOpen && <HexColorPicker color={color} onChange={setColor} />}
    </div>
  );
};

export default NewPaletteForm;
