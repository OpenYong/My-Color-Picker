import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to={`/`}>
            <h1>My Colors</h1>
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link to={`palette/new`}>새 팔레트</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
