import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import styles from "./Palette.module.css";
import Navbar from "./UI/Navbar";
import CustomSnackbar from "./UI/CustomSnackbar";

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");
  const [isSanckbarOpen, setIsSanckbarOpen] = useState(false);

  const { colors, emoji, id, paletteName } = props.palette;

  // console.log(colors);

  const levelChangeHandler = (sliderLevel) => {
    console.log(sliderLevel);
    setLevel(sliderLevel);
  };

  const formatChangeHandler = (formatValue) => {
    setColorFormat(formatValue);
    setIsSanckbarOpen(true);
  };

  return (
    <div className={styles.palette}>
      <CustomSnackbar open={isSanckbarOpen} setOpen={setIsSanckbarOpen} />
      <Navbar
        level={level}
        colorFormat={colorFormat}
        onChangeLevel={levelChangeHandler}
        onChangeFormat={formatChangeHandler}
      />
      <div className={styles["palette-colors"]}>
        {colors[level].map((color, index) => (
          <ColorContainer
            key={index}
            colorName={color.name}
            colorCode={color[colorFormat]}
            textColor={color.textColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Palette;
