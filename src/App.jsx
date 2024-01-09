import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Ejercicio", completed: false },
    { id: 2, text: "Comer", completed: false },
    { id: 3, text: "Dormir", completed: false },
  ]);

  const handleTaskClick = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tareas Ada School</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="radio"
                checked={task.completed}
                onChange={() => handleTaskClick(task.id)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;