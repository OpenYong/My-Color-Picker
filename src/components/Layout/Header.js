import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  const location = useLocation();
  const [showCreateButton, setShowCreateButton] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowCreateButton(true);
    } else {
      setShowCreateButton(false);
    }
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link to={`/`}>
            <h1>MY COLORS</h1>
          </Link>
        </div>
        <div className={styles.buttons}>
          {showCreateButton && <Link to={`palette/new`}>만들기</Link>}
        </div>
      </header>
    </>
  );
};

export default Header;
