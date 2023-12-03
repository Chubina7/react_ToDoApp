import "./App.css";
import ListContainer from "./components/listContainer/ListContainer";
import SearchBar from "./components/searchBar/SearchBar";

export default function App() {
  return (
    <div className="mainContainer">
      <h1 className="heading">My Tasks</h1>
      <SearchBar />
      <ListContainer />
    </div>
  );
}
