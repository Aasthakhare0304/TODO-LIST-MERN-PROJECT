
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let todos = ["Learn MERN", "Build Project"];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  todos.push(req.body.todo);
  res.json(todos);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
