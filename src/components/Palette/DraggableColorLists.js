import React, { useState, useRef } from "react";
import styles from "./DraggableColorLists.module.css";
import DraggableColorContainer from "./DraggableColorContainer";

import chroma from "chroma-js";
import { HexColorInput, HexColorPicker } from "react-colorful";
import {
  horizontalListSortingStrategy,
  SortableContext,
  arrayMove,
} from "@dnd-kit/sortable";
import {
  DndContext,
  PointerSensor,
  useSensor,
  closestCenter,
} from "@dnd-kit/core";

const DraggableColorLists = (props) => {
  const {
    colors,
    onSetColors,
    newPaletteInputRef,
    hexColorPickerRef,
    isPickerOpen,
    setIsPickerOpen,
  } = props;

  const [clickedColorBox, setClickedColorBox] = useState();
  const [enteredColorName, setEnteredColorName] = useState("");

  const colorContainerClickHandler = (dataIndex) => {
    setClickedColorBox(dataIndex);
    setIsPickerOpen(true);
  };

  const pickerHandler = (color, clickedColorIndex) => {
    let newColorArray = [...colors];
    newColorArray[clickedColorIndex].color = color;
    onSetColors(newColorArray);
  };

  const nameChangeHandler = (event, clickedColorIndex) => {
    setEnteredColorName(event.target.value);
  };

  const addColorClickHandler = (dataIndex) => {
    if (colors.length === 10) {
      alert("최대 10개 까지 추가할 수 있습니다.");
      return;
    }
    let targetScaleColor;
    if (colors[dataIndex + 1] === undefined) {
      targetScaleColor = "#000000";
    } else {
      targetScaleColor = colors[dataIndex + 1].color;
    }

    let newColorArray = [...colors];
    newColorArray.splice(dataIndex + 1, 0, {
      name: `New Color ${colors.length + 1}`,
      color: chroma
        .scale([colors[dataIndex].color, targetScaleColor])
        .mode("lab")
        .colors(1)[0],
    });
    onSetColors(newColorArray);
  };

  const removeColorHandler = (dataIndex) => {
    if (colors.length > 1) {
      let newColorArray = [...colors];
      newColorArray.splice(dataIndex, 1);
      onSetColors(newColorArray);
    } else {
      return;
    }
  };

  const sensors = [useSensor(PointerSensor)];

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      onSetColors((items) => {
        const oldIndex = items.findIndex((item) => item.name === active.id);
        const newIndex = items.findIndex((item) => item.name === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const blurHandler = (e, clickedColorIndex) => {
    const result = colors.findIndex((color) => color.name === enteredColorName);

    if (result !== -1 && result !== clickedColorIndex) {
      alert("색상 이름이 중복됩니다.");
      return;
    }

    if (enteredColorName.trim() === "") {
      alert("색상의 이름을 입력해주세요");
      return;
    }

    let newColorArray = [...colors];
    newColorArray[clickedColorIndex].name = enteredColorName;
    onSetColors(newColorArray);
    setIsPickerOpen(false);
  };

  return (
    <>
      <div className={styles["new-palette"]} ref={newPaletteInputRef}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={colors.map((item) => item.name)}
            strategy={horizontalListSortingStrategy}
          >
            {colors.map((color, index) => (
              <DraggableColorContainer
                key={Math.random().toString()}
                dataIndex={index}
                onColorPick={colorContainerClickHandler}
                onAddColor={addColorClickHandler}
                onRemoveColor={removeColorHandler}
                {...color}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div
        className={styles["react-colorfult-container"]}
        ref={hexColorPickerRef}
      >
        {isPickerOpen && (
          <>
            <HexColorPicker
              color={colors[clickedColorBox].color}
              onChange={(color) => pickerHandler(color, clickedColorBox)}
            />
            <HexColorInput
              color={colors[clickedColorBox].color}
              onChange={(color) => pickerHandler(color, clickedColorBox)}
            />
            <input
              type="text"
              placeholder="색상 이름"
              value={enteredColorName}
              onChange={(e) => nameChangeHandler(e, clickedColorBox)}
              onBlur={(e) => blurHandler(e, clickedColorBox)}
            />
          </>
        )}
      </div>
    </>
  );
};

export default DraggableColorLists;
