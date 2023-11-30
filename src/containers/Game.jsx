import React from "react";
import styles from "./containers.module.css";
import { Link, Outlet } from "react-router-dom";

const Game = () => {
  return (
    <div className={styles.game}>
      <div className={styles.game_header}>Game progress</div>
      <div className={styles.game_content}>
        <Outlet />
      </div>
      <div className={styles.game_footer}>
        <Link to="/">Finish</Link>
      </div>
    </div>
  );
};

export default Game;
