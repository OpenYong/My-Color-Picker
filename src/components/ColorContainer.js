import React from "react";
import styles from "./ColorContainer.module.css";

const ColorContainer = (props) => {
  const { colorName, colorCode } = props;
  return (
    <div
      style={{
        background: props.colorCode,
      }}
      className={styles["color-container"]}
    >
      <div className={styles["color-name"]}>
        <span>{colorName}</span>
      </div>
      <button className={styles["copy-btn"]}>Pick!</button>
    </div>
  );
};

export default ColorContainer;
