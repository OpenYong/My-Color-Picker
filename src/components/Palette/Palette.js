import React, { useState } from "react";
import ColorContainer from "../ColorContainer";
import styles from "./Palette.module.css";
import PaletteControl from "./PaletteControl";
import CustomSnackbar from "../UI/CustomSnackbar";

const Palette = (props) => {
  const [level, setLevel] = useState(500);
  const [colorFormat, setColorFormat] = useState("hex");
  const [isSanckbarOpen, setIsSanckbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const { colors, emoji, id, paletteName } = props.palette;

  const levelChangeHandler = (sliderLevel) => {
    setLevel(sliderLevel);
  };

  const formatChangeHandler = (formatValue) => {
    setColorFormat(formatValue);
    snackbarHandler("색상 포맷 변경됨");
  };

  const snackbarHandler = (message) => {
    setIsSanckbarOpen(true);
    setSnackbarMessage(message);
  };

  return (
    <div className={styles.palette}>
      <CustomSnackbar
        open={isSanckbarOpen}
        setOpen={setIsSanckbarOpen}
        message={snackbarMessage}
      />
      <PaletteControl
        level={level}
        colorFormat={colorFormat}
        onChangeLevel={levelChangeHandler}
        onChangeFormat={formatChangeHandler}
        paletteName={paletteName}
        emoji={emoji}
      />
      <div className={styles["palette-colors"]}>
        {colors[level].map((color, index) => (
          <ColorContainer
            key={index}
            colorName={color.name}
            colorCode={color[colorFormat]}
            onSnackbarChange={snackbarHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Palette;
