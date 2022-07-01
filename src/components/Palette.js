import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import styles from "./Palette.module.css";
import Navbar from "./UI/Navbar";

const Palette = (props) => {
  const [level, setLevel] = useState(500);

  const { colors, emoji, id, paletteName } = props.palette;

  const onLevelChangeHandelr = (sliderLevel) => {
    console.log(sliderLevel);
    setLevel(sliderLevel);
  };

  return (
    <div className={styles.palette}>
      <Navbar level={level} onChangeLevel={onLevelChangeHandelr} />
      <div className={styles["palette-colors"]}>
        {colors[level].map((color) => (
          <ColorContainer
            key={color.color}
            colorName={color.name}
            colorCode={color.hex}
          />
        ))}
      </div>
    </div>
  );
};

export default Palette;
