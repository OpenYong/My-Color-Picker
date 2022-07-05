import React, { useState, useRef } from "react";
import styles from "./ColorContainer.module.css";

import chroma from "chroma-js";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorContainer = (props) => {
  const { colorName, colorCode } = props;
  const [isPicked, setIsPicked] = useState(false);

  const pickedColorInput = useRef();

  const onChangeHandler = () => {
    setIsPicked(pickedColorInput.current.checked);
  };

  const onBlurHandler = () => {
    setIsPicked(false);
  };

  let isDark = chroma(colorCode).luminance() <= 0.1;
  let isLight = chroma(colorCode).luminance() >= 0.8;

  return (
    <CopyToClipboard text={colorCode} onCopy={onChangeHandler}>
      <div
        style={{
          background: props.colorCode,
        }}
        className={`${styles["color-container"]}`}
      >
        <div className={`${isPicked && styles.picked}`}>
          <div className={styles["color-name"]}>
            <span
              className={
                (isDark && styles["color-name--white"]) ||
                (isLight && styles["color-name--black"])
              }
            >
              {colorName}
            </span>
          </div>
          <input
            type="radio"
            id={colorCode}
            value={colorName}
            name="main-colors"
            ref={pickedColorInput}
            onBlur={onBlurHandler}
          />
          <label
            htmlFor={colorCode}
            className={`${styles["copy-btn"]} ${isPicked && styles.picked}`}
          ></label>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default ColorContainer;
