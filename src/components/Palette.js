import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import styles from "./Palette.module.css";
import Navbar from "./UI/Navbar";

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");

  const { colors, emoji, id, paletteName } = props.palette;

  const levelChangeHandler = (sliderLevel) => {
    console.log(sliderLevel);
    setLevel(sliderLevel);
  };

  const formatChangeHandler = (formatValue) => {
    setColorFormat(formatValue);
  };

  return (
    <div className={styles.palette}>
      <Navbar
        level={level}
        colorFormat={colorFormat}
        onChangeLevel={levelChangeHandler}
        onChangeFormat={formatChangeHandler}
      />
      <div className={styles["palette-colors"]}>
        {colors[level].map((color) => (
          <ColorContainer
            key={color.color}
            colorName={color.name}
            colorCode={color[colorFormat]}
          />
        ))}
      </div>
    </div>
  );
};

export default Palette;
