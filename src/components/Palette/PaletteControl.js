import React from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./PaletteControl.module.css";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const PaletteControl = (props) => {
  const {
    level,
    colorFormat,
    onChangeLevel,
    onChangeFormat,
    paletteName,
    emoji,
  } = props;

  const selectChangeHandler = (event) => {
    onChangeFormat(event.target.value);
  };

  return (
    <div className={styles["palette-control"]}>
      <h1 className={styles["palette-title"]}>
        {paletteName}
        {"  "}
        {emoji}
      </h1>
      <div className={styles["control-container"]}>
        <div className={styles.slider}>
          <span>컬러 쉐도우 : {level}</span>
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={(value) => onChangeLevel(value)}
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
        <Box sx={{ minWidth: 150, margin: "1rem" }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">색상 포맷</InputLabel>
            <Select
              value={colorFormat}
              label="Color Format"
              onChange={selectChangeHandler}
            >
              <MenuItem value="hex">HEX</MenuItem>
              {/* <MenuItem value="#HEX">#HEX</MenuItem> */}
              <MenuItem value="rgb">RGB</MenuItem>
              <MenuItem value="rgba">RGBA</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default PaletteControl;
