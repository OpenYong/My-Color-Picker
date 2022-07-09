import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        <Link to={`/`}>
          <h1>My Colors</h1>
        </Link>
      </div>
      <nav>
        <Link to={`palette/new`}>새 팔레트</Link>
      </nav>
    </header>
  );
};

export default Header;
