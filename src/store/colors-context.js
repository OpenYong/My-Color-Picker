import React, { useReducer } from "react";

import dummyData from "../dummy-data";

const ColorsContext = React.createContext({
  colors: dummyData,
  addPalette: (palette) => {},
});

const defaultColorsState = {
  colors: dummyData,
};

const colorsReducer = (state, action) => {
  if (action.type === "ADD_PALETTE") {
    console.log(state.colors);
    console.log(action.palette);
    let updatedColors;
    updatedColors = state.colors.concat(action.palette);

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

  const addPaletteHandler = (palette) => {
    dispatchColorAction({ type: "ADD_PALETTE", palette });
  };

  const colorsContext = {
    colors: colorState.colors,
    addPalette: addPaletteHandler,
  };

  return (
    <ColorsContext.Provider value={colorsContext}>
      {props.children}
    </ColorsContext.Provider>
  );
};

export default ColorsContext;
