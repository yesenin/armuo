import React from "react";
import styles from "./containers.module.css";
import { Outlet } from "react-router";
import Menu from "./Menu";

const App = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <Outlet />
    </div>
  );
};

export default App;
