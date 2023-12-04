import React from "react";
import ListItem from "../listItem/ListItem";
import styles from "./ListContainer.module.css";

export default function ListContainer(props) {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.listAllItems}>
        {props.tasks.map((task, index) => {
          let title =
            task.split("")[0].toUpperCase() +
            task.split("").slice(1, task.lenght).join("");

          return <ListItem title={title} key={index} onDeleteClick={props.onDeleteClick} />;
        })}
      </ul>
    </div>
  );
}
