import React from "react";
import styles from "./MiniPalette.module.css";

const MiniPalette = (props) => {
  const { colors } = props;

  return (
    <div className={styles["mini-palette"]}>
      {colors.map((item) => (
        <div
          style={{
            backgroundColor: item.color,
          }}
          className={styles["color-container"]}
        ></div>
      ))}
    </div>
  );
};

export default MiniPalette;
