import styles from "./listContainer.module.css";
import ListItem from "../listItem/ListItem";

export default function ListContainer() {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.listAllItems}>
        <ListItem title={"title"} />
      </ul>
    </div>
  );
}
