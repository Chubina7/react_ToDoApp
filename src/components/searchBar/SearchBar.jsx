import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="test" className={styles.inputField} />
      <button className={styles.inputBtn}>Add Task</button>
    </div>
  );
}
