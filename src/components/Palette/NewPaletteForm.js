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
  const [isFocused, setIsFocused] = useState(false);
  const [enteredEmoji, setEnteredEmoji] = useState("");
  const colorsCtx = useContext(ColorsContext);

  const paletteNameInput = useRef();
  const paletteEmojiInput = useRef();
  const newPaletteInput = useRef();
  const hexColorPicker = useRef();

  const navigate = useNavigate();

  const savePaletteHandler = (e) => {
    e.preventDefault();

    if (paletteNameInput.current.value === "") {
      return;
    }
    const newPalette = {
      paletteName: paletteNameInput.current.value,
      id: paletteNameInput.current.value,
      emoji: paletteEmojiInput.current.value,
      colors: colors,
    };
    colorsCtx.addPalette(newPalette);

    paletteNameInput.current.value = "";
    paletteEmojiInput.current.value = "";

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
          inputRef={paletteNameInput}
        />
        <Input
          id="standard-basic"
          placeholder="이모지"
          inputRef={paletteEmojiInput}
          onFocus={focusHandler}
          value={enteredEmoji}
        />
        <Button variant="outlined" type="submit">
          만들기
        </Button>

        {isFocused && (
          <EmojiPicker
            onEmojiSelect={(e) => {
              setEnteredEmoji(e.native);
            }}
          />
        )}
      </Box>
    </div>
  );
};

export default NewPaletteForm;
