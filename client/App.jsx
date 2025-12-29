
import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/todos")
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = async () => {
    const res = await fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: text })
    });
    const data = await res.json();
    setTodos(data);
    setText("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple MERN Todo App</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, i) => <li key={i}>{t}</li>)}
      </ul>
    </div>
  );
}

export default App;
