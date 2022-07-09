import React, { useState, useRef } from "react";
import styles from "./NewPaletteForm.module.css";
import { HexColorPicker } from "react-colorful";
import DraggableColorContainer from "./DraggableColorContainer";
import chroma from "chroma-js";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const NewPaletteForm = () => {
  const [colors, setColors] = useState([
    {
      name: "Your Color 1",
      color: "#aabbcc",
    },
    {
      name: "Your Color 2",
      color: "#373737",
    },
    {
      name: "Your Color 2",
      color: "#C15555",
    },
    {
      name: "Your Color 2",
      color: "#F1C7C7",
    },
  ]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [clickedColorBox, setClickedColorBox] = useState();
  const paletteNameInput = useRef();

  const colorContainerClickHandler = (dataIndex) => {
    setClickedColorBox(dataIndex);
    setIsPickerOpen((prevState) => !prevState);
  };

  const addColorClickHandler = (dataIndex) => {
    let targetScaleColor;
    if (colors[dataIndex + 1] === undefined) {
      targetScaleColor = "#000000";
    } else {
      targetScaleColor = colors[dataIndex + 1].color;
    }

    let newColorArray = [...colors];
    newColorArray.splice(dataIndex + 1, 0, {
      name: "New Color",
      color: chroma
        .scale([colors[dataIndex].color, targetScaleColor])
        .mode("lab")
        .colors(1)[0],
    });
    setColors(newColorArray);
  };

  const removeColorHandler = (dataIndex) => {
    if (colors.length > 1) {
      let newColorArray = [...colors];
      newColorArray.splice(dataIndex, 1);
      setColors(newColorArray);
    } else {
      return;
    }
  };

  const pickerHandler = (color, clickedColorBox) => {
    let newColorArray = [...colors];
    newColorArray[clickedColorBox].color = color;
    setColors(newColorArray);
  };

  const savePaletteHandler = (e) => {
    e.preventDefault();
    const newPalette = {
      paletteName: paletteNameInput.current.value,
      id: paletteNameInput.current.value,
      emoji: "🎨",
      colors: colors,
    };
    console.log(newPalette);

    paletteNameInput.current.value = "";
  };

  return (
    <div className={styles["main-container"]}>
      <div className={styles["new-palette"]}>
        {colors.map((color, index) => (
          <DraggableColorContainer
            key={Math.random().toString()}
            dataIndex={index}
            onColorPick={colorContainerClickHandler}
            color={color.color}
            onAddColor={addColorClickHandler}
            onRemoveColor={removeColorHandler}
          />
        ))}
      </div>
      {isPickerOpen && (
        <HexColorPicker
          color={colors[clickedColorBox].color}
          onChange={(color) => pickerHandler(color, clickedColorBox)}
        />
      )}
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={(e) => savePaletteHandler(e)}
      >
        <TextField
          id="standard-basic"
          label="팔레트 명"
          variant="standard"
          inputRef={paletteNameInput}
        />
        <Button variant="outlined" type="submit">
          만들기
        </Button>
      </Box>
    </div>
  );
};

export default NewPaletteForm;
