import React, { useContext } from "react";
import styles from "./MiniPalette.module.css";

import ColorsContext from "../store/colors-context";

const MiniPalette = (props) => {
  const { colors, id } = props;

  const colorsCtx = useContext(ColorsContext);

  const deleteHandler = (e) => {
    e.preventDefault();
    colorsCtx.removePalette(id);
    // console.log("first");
  };

  return (
    <>
      <div className={styles["mini-palette"]}>
        {colors.map((item, index) => (
          <div
            style={{
              backgroundColor: item.color,
            }}
            className={styles["color-container"]}
            key={index}
          ></div>
        ))}
        <span className={styles["delete-palette"]}>
          <button
            className={styles["delete-palette__btn"]}
            onClick={(e) => deleteHandler(e)}
          >
            제거
          </button>
        </span>
      </div>
    </>
  );
};

export default MiniPalette;
