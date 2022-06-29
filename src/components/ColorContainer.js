import React, { useState, useCallback, useRef } from "react";
import styles from "./ColorContainer.module.css";

import { CopyToClipboard } from "react-copy-to-clipboard";

const ColorContainer = (props) => {
  const { colorName, colorCode } = props;
  const [isCopied, setIsCopied] = useState(false);
  const [isPicked, setIsPicked] = useState(false);

  const pickedColorInput = useRef();

  //   const copyHandler = () => {
  //     setIsCopied(isCopied);
  //   };

  const onChangeHandler = () => {
    setIsPicked((prevState) => !prevState);
  };

  return (
    <CopyToClipboard text={colorCode}>
      <div
        style={{
          background: props.colorCode,
        }}
        className={`${styles["color-container"]} ${isPicked && styles.picked}`}
      >
        <div className={styles["color-name"]}>
          <span>{colorName}</span>
        </div>
        <input
          type="radio"
          id={colorCode}
          value={colorName}
          name="main-colors"
          ref={pickedColorInput}
          onChange={onChangeHandler}
        />
        <label for={colorCode} className={styles["copy-btn"]}></label>
      </div>
    </CopyToClipboard>
  );
};

export default ColorContainer;
