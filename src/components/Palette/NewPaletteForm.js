import React, { useState, useRef, useContext } from "react";
import styles from "./NewPaletteForm.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import DraggableColorLists from "./DraggableColorLists";

import ColorsContext from "../../store/colors-context";

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
      name: "Your Color 3",
      color: "#C15555",
    },
    {
      name: "Your Color 4",
      color: "#F1C7C7",
    },
  ]);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const colorsCtx = useContext(ColorsContext);

  const paletteNameInput = useRef();
  const newPaletteInput = useRef();
  const hexColorPicker = useRef();

  const savePaletteHandler = (e) => {
    e.preventDefault();
    if (paletteNameInput.current.value === "") {
      return;
    }
    const newPalette = {
      paletteName: paletteNameInput.current.value,
      id: paletteNameInput.current.value,
      emoji: "🎨",
      colors: colors,
    };
    colorsCtx.addPalette(newPalette);

    paletteNameInput.current.value = "";
  };

  const outClickHandler = (e) => {
    if (hexColorPicker.current.contains(e.target)) {
      setIsPickerOpen(true);
    } else if (!newPaletteInput.current.contains(e.target)) {
      setIsPickerOpen(false);
    }
  };

  return (
    <div className={styles["main-container"]} onClick={outClickHandler}>
      <DraggableColorLists
        colors={colors}
        onSetColors={setColors}
        newPaletteInputRef={newPaletteInput}
        hexColorPickerRef={hexColorPicker}
        isPickerOpen={isPickerOpen}
        setIsPickerOpen={setIsPickerOpen}
      />
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
