import React from "react";
import MiniPalette from "./MiniPalette";
import styles from "./PaletteThumbnail.module.css";

import { Link } from "react-router-dom";

const PaletteThumbnail = (props) => {
  const { paletteList } = props;

  return (
    <div className={styles["container"]}>
      {paletteList.map((palette) => (
        <Link to={`palette/${palette.id}`} key={palette.id}>
          <div className={styles["palette-thumbnail"]}>
            <h2>{palette.paletteName}</h2>
            <MiniPalette id={palette.id} colors={palette.colors} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PaletteThumbnail;
