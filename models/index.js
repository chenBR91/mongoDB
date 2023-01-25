import mongoose from "mongoose";

import Todo from "./Todo.js";
//const Todo = require('./Todo.js')

const connectDb = () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(
    "mongodb://127.0.0.1:27017/Todos-Collection",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );

};

const models = {Todo}
export {models, connectDb}
//export default Todo


