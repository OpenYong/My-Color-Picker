import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import styles from "./DraggableColorContainer.module.css";
import { CSS } from "@dnd-kit/utilities";

const DraggableColorContainer = (props) => {
  const { onColorPick, dataIndex, name, color, onAddColor, onRemoveColor } =
    props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      className={styles["color-container"]}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
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
        <button {...listeners}>이동</button>
      </div>
    </div>
  );
};

export default DraggableColorContainer;
