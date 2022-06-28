import React from "react";
import styles from "./ColorContainer.module.css";

const ColorContainer = (props) => {
  return (
    <div
      style={{
        background: props.colorCode,
      }}
      className={styles["color-container"]}
    >
      <span>{props.colorName}</span>
      <span>more</span>
    </div>
  );
};

export default ColorContainer;
