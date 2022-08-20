import React, { useState, useRef, useContext } from "react";
import styles from "./NewPaletteForm.module.css";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

import DraggableColorLists from "./DraggableColorLists";
import EmojiPicker from "../EmojiPicker";

import ColorsContext from "../../store/colors-context";
import { useNavigate } from "react-router-dom";

const NewPaletteForm = (props) => {
  const { selectedPalette, isUpdating } = props;
  const [colors, setColors] = useState(selectedPalette.colors);

  const [palette, setPalette] = useState(selectedPalette);

  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const colorsCtx = useContext(ColorsContext);

  const newPaletteInput = useRef();
  const hexColorPicker = useRef();

  const navigate = useNavigate();

  const savePaletteHandler = (e) => {
    e.preventDefault();

    if (palette.paletteName === "") {
      return;
    }
    let newPalette;

    if (!isUpdating) {
      newPalette = {
        ...palette,
        colors: colors,
        id: palette.paletteName,
      };
      colorsCtx.addPalette(newPalette);
    } else {
      newPalette = {
        ...palette,
        colors: colors,
      };
      colorsCtx.updatePalette(newPalette.id, newPalette);
    }

    navigate("../", { replace: true });
  };

  // 컬러 피커가 열려있을때
  // 색상 선택을 할 수 있도록 하기 위함
  const outClickHandler = (e) => {
    if (hexColorPicker.current.contains(e.target)) {
      setIsPickerOpen(true);
    } else if (!newPaletteInput.current.contains(e.target)) {
      // setIsPickerOpen(false);
    }
  };

  const focusHandler = () => {
    setIsFocused(true);
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;

    setPalette((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log(palette);

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
        className={styles["color-form"]}
      >
        <Input
          id="standard-basic"
          placeholder="팔레트 이름"
          name="paletteName"
          value={palette.paletteName}
          onChange={changeHandler}
        />
        <Input
          id="standard-basic"
          placeholder="이모지"
          name="emoji"
          onFocus={focusHandler}
          value={palette.emoji}
          onChange={changeHandler}
        />
        <Button variant="outlined" type="submit">
          만들기
        </Button>

        {isFocused && (
          <EmojiPicker
            onEmojiSelect={(e) => {
              setPalette((prevState) => ({
                ...prevState,
                emoji: e.native,
              }));
            }}
          />
        )}
      </Box>
    </div>
  );
};

export default NewPaletteForm;
