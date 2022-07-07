import React from "react";
import styles from "./DraggableColorContainer.module.css";

const DraggableColorContainer = (props) => {
  const { onClick, color } = props;
  return (
    <div
      className={styles["color-container"]}
      onClick={() => onClick(color)}
      style={{ backgroundColor: color }}
    >
      <div className={styles["color-container__right"]}>
        <div className={styles["add-btn"]}> +</div>
      </div>
    </div>
  );
};

export default DraggableColorContainer;
