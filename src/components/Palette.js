import React from "react";
import ColorContainer from "./ColorContainer";
import styles from "./Palette.module.css";

const Palette = (props) => {
  const { colors, emoji, id, paletteName } = props;
  //   console.log(colors);
  return (
    <div className={styles.palette}>
      <div className={styles["palette-colors"]}>
        {colors.map((color) => (
          <ColorContainer
            key={color.color}
            colorName={color.name}
            colorCode={color.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Palette;
