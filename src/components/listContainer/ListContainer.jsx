import React from "react";
import styles from "./listContainer.module.css";
import ListItem from "../listItem/ListItem";

export default function ListContainer() {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.listAllItems}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}
