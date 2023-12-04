import React from "react";
import { useState } from "react";
import styles from "./AddItems.module.css";
import ListItem from "../listItem/ListItem";
import ListContainer from "../listContaiener/ListContainer";

export default function AddItems() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const changeHandler = (e) => setValue(e.target.value);

  const addTask = () => {
    if (value.trim() !== "") {
      setTasks([...tasks, value]);
      setValue("");
    }
  };

  const deleteTask = () => {
    console.log("deleted");
  };

  return (
    <>
      <div className={styles.addContainer}>
        <input
          className={styles.inputField}
          type="text"
          placeholder="Add task"
          value={value}
          onChange={changeHandler}
        />
        <button className={styles.inputBtn} onClick={addTask}>
          Add Task
        </button>
      </div>
      <ListContainer tasks={tasks} onDeleteClick={deleteTask}/>
    </>
  );
}
