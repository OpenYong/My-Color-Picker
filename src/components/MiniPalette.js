import React, { useContext } from "react";
import styles from "./MiniPalette.module.css";
import { useNavigate } from "react-router-dom";

import ColorsContext from "../store/colors-context";

const MiniPalette = (props) => {
  const { colors, id } = props;

  const colorsCtx = useContext(ColorsContext);
  let navigate = useNavigate();

  const updateClickHandler = (e) => {
    e.preventDefault();
    navigate(`/palette/update/${id}`);
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    colorsCtx.removePalette(id);
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
            className={styles["delete-palette__btn--update"]}
            onClick={updateClickHandler}
          >
            수정
          </button>
          <button
            className={styles["delete-palette__btn--remove"]}
            onClick={(e) => deleteHandler(e)}
          >
            삭제
          </button>
        </span>
      </div>
    </>
  );
};

export default MiniPalette;
