import React from "react";
import styles from "./base_components.module.css";
import cx from "classnames";

const DuoButton = ({ children, className, onClick }) => {
  return (
    <div
      className={cx(styles.click, styles.button, className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DuoButton;
