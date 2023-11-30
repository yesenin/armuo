import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/abc">Alphabet</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
