import React from "react";

const PaletteThumbnail = (props) => {
  const { paletteList } = props;
  console.log(paletteList);
  return (
    <>
      {paletteList.map((palette) => (
        <div>
          <h2>{palette.paletteName}</h2>
          <div>Colors</div>
        </div>
      ))}
    </>
  );
};

export default PaletteThumbnail;
