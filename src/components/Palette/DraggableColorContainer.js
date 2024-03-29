import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import styles from "./DraggableColorContainer.module.css";
import { CSS } from "@dnd-kit/utilities";
import chroma from "chroma-js";

const DraggableColorContainer = (props) => {
  const { onColorPick, dataIndex, name, color, onAddColor, onRemoveColor } =
    props;

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: name });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  let isDark = chroma(color).luminance() <= 0.1;

  return (
    <div
      className={styles["color-container"]}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <div
        className={styles["color-background"]}
        onClick={(e) => onColorPick(dataIndex)}
        style={{ backgroundColor: color }}
      >
        <div className={styles["color-container__right"]}>
          <button
            className={styles["add-btn"]}
            onClick={(e) => {
              e.stopPropagation();
              onAddColor(dataIndex);
            }}
          >
            +
          </button>
          <button
            className={styles["add-btn"]}
            onClick={(e) => {
              e.stopPropagation();
              onRemoveColor(dataIndex);
            }}
          >
            -
          </button>
          <button className={styles["drag-btn"]} {...listeners}>
            이동
          </button>
        </div>
        <div className={styles["color-info"]}>
          <span
            className={styles["color-info__code"]}
            style={{
              color: isDark ? "white" : "",
            }}
          >
            {color}
          </span>
          <span
            className={styles["color-info__name"]}
            style={{ color: isDark ? "white" : "" }}
          >
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DraggableColorContainer;
