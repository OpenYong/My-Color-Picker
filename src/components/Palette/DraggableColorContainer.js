import React from "react";
import styles from "./DraggableColorContainer.module.css";

const DraggableColorContainer = (props) => {
  const { onColorPick, dataIndex, color, onAddColor, onRemoveColor } = props;
  return (
    <div className={styles["color-container"]}>
      <div
        className={styles["color-background"]}
        onClick={() => onColorPick(dataIndex)}
        style={{ backgroundColor: color }}
      ></div>
      <div className={styles["color-container__right"]}>
        <div
          className={styles["add-btn"]}
          onClick={() => onAddColor(dataIndex)}
        >
          +
        </div>
        <div
          className={styles["add-btn"]}
          onClick={() => onRemoveColor(dataIndex)}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default DraggableColorContainer;
