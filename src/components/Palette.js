import React, { useState } from "react";
import ColorContainer from "./ColorContainer";
import styles from "./Palette.module.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Palette = (props) => {
  const [level, setLevel] = useState(500);

  const { colors, emoji, id, paletteName } = props.palette;

  const onLevelChangeHandelr = (sliderLevel) => {
    console.log(sliderLevel);
    setLevel(sliderLevel);
  };

  return (
    <div className={styles.palette}>
      <div className={styles.slider}>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={(value) => onLevelChangeHandelr(value)}
          trackStyle={{
            backgroundColor: "#90CAF9",
            height: 8,
          }}
          railStyle={{
            height: 8,
          }}
          handleStyle={{
            backgroundColor: "#90CAF9",
            marginTop: -4,
          }}
        />
      </div>
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
