import mongoose from "mongoose";

import Todo from "./Todo.js";
//const Todo = require('./Todo.js')



// mongodb+srv://chenAlex:<password>@items.ktyxttc.mongodb.net/test


// mongoose.set("strictQuery", true);
// const connectDb = () => {
//   mongoose.connect(
//     "mongodb://127.0.0.1:27017/Todos-Collection",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//   );
// };

const models = {Todo}
export {models}
//export default Todo


