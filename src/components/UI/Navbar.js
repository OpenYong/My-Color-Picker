import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  const { level, onChangeLevel } = props;

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">My Colors</a>
      </div>
      <div className={styles.slider}>
        <span>쉐도우 : {level}</span>
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={(value) => onChangeLevel(value)}
          trackStyle={{
            backgroundColor: "#90CAF9",
            height: 8,
          }}
          railStyle={{
            height: 8,
          }}
          handleStyle={{
            backgroundColor: "#90CAF9",
            marginTop: -4,
          }}
        />
      </div>
    </header>
  );
};

export default Navbar;
