import React, { useState, useCallback, useRef } from "react";
import styles from "./ColorContainer.module.css";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorContainer = (props) => {
  const { colorName, colorCode } = props;
  const [isCopied, setIsCopied] = useState(false);
  const [isPicked, setIsPicked] = useState(false);

  const pickedColorInput = useRef();

  const onChangeHandler = () => {
    setIsPicked(pickedColorInput.current.checked);
  };

  const onBlurHandler = () => {
    setIsPicked(false);
  };

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
            <span>{colorName}</span>
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
