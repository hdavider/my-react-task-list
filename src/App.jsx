import React, { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", completed: false });

  // Cargar tareas localStorage al iniciar
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Guardar tareas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.title) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ title: "", description: "", completed: false }); // Reset form
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const editTask = (taskId, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === taskId ? updatedTask : task)));
  };

  return (
    <div>
      <h1>Lista de Tareas Ada School</h1>

      <div>
        <input
          type="text"
          placeholder="Título"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={addTask}>Agregar Tarea</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => editTask(task.id, { ...task, completed: !task.completed })}
              />
              {task.title}: {task.description}
            </label>
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
            {/* Implementación de edición aquí*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
