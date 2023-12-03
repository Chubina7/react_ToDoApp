import React from "react";
import styles from "./SearchBar.module.css";
import ListItem from "../listItem/ListItem";

export default function SearchBar() {
  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="test"
          className={styles.inputField}
        />
        <button className={styles.inputBtn} onClick={''}>
          Add Task
        </button>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.listAllItems}>
          <ListItem title={"title"} />
          <ListItem title={"გდსფნ"} />
        </ul>
      </div>
    </>
  );
}
