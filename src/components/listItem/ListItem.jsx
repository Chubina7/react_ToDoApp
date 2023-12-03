import React from "react";
import styles from "./ListItem.module.css";

export default function ListItem() {
  return (
    <li className={styles.listItem}>
      <div className={styles.listItemRightPart}>
        <input
          type="checkbox"
          name="done"
          className={styles.doneChekbox} />
        <p className={styles.taskTitle}>Task Name</p>
      </div>
      <button className={styles.deleteBtn}>X</button>
    </li>
  );
}
