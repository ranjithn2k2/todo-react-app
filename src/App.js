import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="page">
      <div className="card">
        <h1>📝 My To-Do App</h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="Add a new task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index} className={t.completed ? "done" : ""}>
              <span onClick={() => toggleTask(index)}>{t.text}</span>
              <button onClick={() => deleteTask(index)}>✖</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
