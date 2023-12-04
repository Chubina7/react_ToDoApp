import "./App.css";
import AddItems from "./components/addItems/AddItems";

export default function App() {
  return (
    <div className="mainContainer">
      <h1 className="heading">My Tasks</h1>
      <AddItems />
    </div>
  );
}
