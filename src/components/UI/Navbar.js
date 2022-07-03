import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./Navbar.module.css";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const Navbar = (props) => {
  const { level, colorFormat, onChangeLevel, onChangeFormat } = props;

  const selectChangeHandler = (event) => {
    onChangeFormat(event.target.value);
  };

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
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
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
    </header>
  );
};

export default Navbar;
