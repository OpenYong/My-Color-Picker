import React, { useReducer } from "react";

import dummyData from "../dummy-data";

const ColorsContext = React.createContext({
  colors: dummyData,
  addPalette: (palette) => {},
  updatePalette: (id, palette) => {},
  removePalette: (id) => {},
});

let defaultColorsState;
if (!!localStorage.getItem("colors")) {
  defaultColorsState = {
    colors: JSON.parse(localStorage.getItem("colors")),
  };
} else {
  defaultColorsState = {
    colors: dummyData,
  };
}

const colorsReducer = (state, action) => {
  if (action.type === "ADD_PALETTE") {
    let updatedColors;
    updatedColors = state.colors.concat(action.palette);

    return {
      colors: updatedColors,
    };
  }

  if (action.type === "UPDATE_PALETTE") {
    let updatedColors = [...state.colors];

    const indexOfColors = state.colors.findIndex(
      (color) => color.id === action.id
    );

    updatedColors[indexOfColors] = action.palette;

    return {
      colors: updatedColors,
    };
  }

  if (action.type === "REMOVE_PALETTE") {
    let updatedColors;

    const indexOfColors = state.colors.findIndex(
      (color) => color.id === action.id
    );

    updatedColors = state.colors.filter((color) => color.id !== action.id);

    return {
      colors: updatedColors,
    };
  }

  return defaultColorsState;
};

export const ColorsProvider = (props) => {
  const [colorState, dispatchColorAction] = useReducer(
    colorsReducer,
    defaultColorsState
  );

  localStorage.setItem("colors", JSON.stringify(colorState.colors));

  const addPaletteHandler = (palette) => {
    dispatchColorAction({ type: "ADD_PALETTE", palette });
  };

  const updatePaletteHandler = (id, palette) => {
    dispatchColorAction({ type: "UPDATE_PALETTE", id, palette });
  };

  const removePaletteHandler = (id) => {
    dispatchColorAction({ type: "REMOVE_PALETTE", id });
  };

  const colorsContext = {
    colors: colorState.colors,
    addPalette: addPaletteHandler,
    removePalette: removePaletteHandler,
    updatePalette: updatePaletteHandler,
  };

  return (
    <ColorsContext.Provider value={colorsContext}>
      {props.children}
    </ColorsContext.Provider>
  );
};

export default ColorsContext;
