import React from "react";
import styles from "./base_components.module.css";
import cx from "classnames";

const Tile = ({ children }) => {
  return (
    <div className={cx(styles.tile, styles.no_click, styles.grey)}>
      {children}
    </div>
  );
};

export default Tile;
