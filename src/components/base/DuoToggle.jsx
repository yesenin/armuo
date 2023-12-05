import React from "react";
import styles from "./base_components.module.css";
import clsx from "clsx";

const DuoToggle = ({ children, className, onClick, toggle }) => {
  return (
    <div
      className={clsx(
        styles.click,
        styles.button,
        className,
        toggle && styles.toggle,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default DuoToggle;
