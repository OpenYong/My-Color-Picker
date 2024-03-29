import React from "react";
import MiniPalette from "./MiniPalette";
import styles from "./PaletteThumbnail.module.css";

import { Link } from "react-router-dom";

const PaletteThumbnail = (props) => {
  let { paletteList } = props;

  return (
    <div className={styles["container"]}>
      {paletteList
        .slice()
        .reverse()
        .map((item) => (
          <div className={styles.palette} key={item.id}>
            <h2 className={styles["palette-title"]}>
              {item.paletteName} {item.emoji}
            </h2>
            <Link to={`palette/${item.id}`} key={item.id}>
              <div className={styles["palette-thumbnail"]}>
                <MiniPalette id={item.id} colors={item.colors} />
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PaletteThumbnail;
