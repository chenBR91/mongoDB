import express from "express";
import { executeTodos } from "./data/data.js";
const todoApi = express();

console.log('test todoApi');

todoApi.get("/api/todos/showTodos/", async (req, res) => {
    const todos = { ...executeTodos };
    res.send(todos);
  });
  
  todoApi.get("/api/todos/showTodos/:id", async (req, res) => {
    const todos = [...executeTodos];
    const { id } = req.params;
    const findHaveIndex = todos.findIndex((fd) => fd.id === Number(id));
    res.send(todos[findHaveIndex]);
  });
  
  todoApi.post("/api/todos/addTodo", async (req, res) => {
    const todo = { ...req.body };
    executeTodos.push(todo);
    res.send({ executeTodos });
  });
  
  todoApi.put("/api/todos/updateTodo/:id", async (req, res) => {
    const { id } = req.params;
    const {title} = req.body;
    const findIndex = executeTodos.findIndex((fd) => fd.id === Number(id));
    if(findIndex !== -1) {
      executeTodos[findIndex].title = title;
    } else {
      res.send("Not found todo for update");
    }
    res.send({executeTodos});
  });
  
  todoApi.delete("/api/todos/deleteTodo/:id", async(req, res) => {
      const {id} = req.params;
      const findIndex = executeTodos.findIndex((fd) => fd.id === Number(id));
      if(findIndex !== -1) {
          executeTodos.splice(findIndex, 1);
      } else {
          res.send("Not aviable to delete");
      }
      res.send({executeTodos});
  })

  export default todoApi;