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

  const colorContainerClickHandler = (dataIndex) => {
    setClickedColorBox(dataIndex);
    setIsPickerOpen(true);
  };

  const pickerHandler = (color, clickedColorBox) => {
    let newColorArray = [...colors];
    newColorArray[clickedColorBox].color = color;
    onSetColors(newColorArray);
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
          </>
        )}
      </div>
    </>
  );
};

export default DraggableColorLists;
