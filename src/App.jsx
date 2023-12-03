import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1>My Tasks</h1>
      <input type="text" placeholder='test' />
      <button>Add Task</button>

      <div>
        <ul>
          <li>
            <input type="checkbox" name="done" />
            <p>Task Name</p>
            <button>X</button>
          </li>
        </ul>
      </div>

    </div>
  );
}