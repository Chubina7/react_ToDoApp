import React from "react";
import { useState } from "react";
import styles from "./AddItems.module.css";
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
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  const deleteTask = (index) => {
    const changedTasks = tasks.filter((_, i) => i !== index);
    setTasks(changedTasks);
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
          onKeyDown={handleKeyPress}
        />
        <button className={styles.inputBtn} onClick={addTask}>
          Add Task
        </button>
      </div>
      <ListContainer tasks={tasks} onDeleteClick={deleteTask} />
    </>
  );
}
