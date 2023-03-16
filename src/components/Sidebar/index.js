import React from "react";
import style from "./style.module.css";
import { Button } from "primereact/button";

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Button label="Home" className={`btn ${style.btn}`} />
    </div>
  );
}

export default Sidebar;
