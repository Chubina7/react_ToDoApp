import React, { useState } from "react";
import styles from "./ListItem.module.css";

export default function ListItem(props) {
  const [done, setDone] = useState(false);

  const doneHandle = () => {
    setDone(!done);
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.listItemRightPart}>
        <input type="checkbox" name="done" className={styles.doneChekbox} />
        <p className={`${styles.taskTitle} ${done && styles.checked}`}>{props.title}</p>
      </div>
      <button className={styles.deleteBtn} onClick={doneHandle}>X</button>
    </li>
  );
}
