import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { executeTodos } from "./data/data.js";
//import todoApi from "./basicRestFullApi.js";
import { models, connectDb } from "./models/index.js";

const PORT = 3000;
const app = express();
//const router = app.router

// middleware
app.use(express.json());
app.use(cors());
//app.use(todoApi); // change to router!!!

// connection to the MondoDb
connectDb();



app.get("/api/todos/allTodos", async (req, res) => {
  models.Todo.find(function (err, todos) {
    if (err) {
      return console.log(err);
    }
    res.send({ todos });
  });
});

app.get("/api/todos/todoDetail/:id", async (req, res) => {
    const {id} = req.params;
    const objectById = {_id: id};
    models.Todo.find(objectById, function(err, obj){
        if(err) return console.log(err._message);
        res.send({obj});
    })
})

app.post("/api/todos/addTodo", async (req, res) => {
  const { todoTask } = { ...req.body };
  const addTodoDb = new models.Todo({
    todoTask: todoTask,
  });
  try {
    await addTodoDb.save();
  } catch (error) {
    console.log(error._message);
  }

  models.Todo.find(function (err, containTodos) {
    if (err) return console.log(err);
    console.log("containTodos", containTodos);
    res.send({ containTodos });
  });
});

// Delete
app.delete("/api/todos/deleteTodo/:id", async (req, res) => {
  const { id } = req.params;
  const deleteById = { _id: id };

  models.Todo.deleteOne(deleteById, function (err, obj) {
    if (err) return console.log("err", err);
    console.log("obj", obj);
  });

  models.Todo.find({}, function (err, obj) {
    if (err) return err._message;
    res.send({ obj });
  });
});



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
