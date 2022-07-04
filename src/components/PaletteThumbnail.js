import React from "react";
import MiniPalette from "./MiniPalette";
import styles from "./PaletteThumbnail.module.css";

import { Link, useNavigate } from "react-router-dom";

const PaletteThumbnail = (props) => {
  const { paletteList } = props;

  let navigate = useNavigate();

  return (
    <div className={styles["container"]}>
      {paletteList.map((palette) => (
        <Link to={`palette/${palette.id}`}>
          <div className={styles["palette-thumbnail"]}>
            <h2>{palette.paletteName}</h2>
            <MiniPalette colors={palette.colors} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PaletteThumbnail;
