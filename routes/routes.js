const express = require("express");
const { ADDTodo, ChangeTodo, ChangeTitle } = require("../Controller/EditTodo");
const { CreatedTodo, CreateTask } = require("../Controller/createTask");
const { gettingTodos, getTodo } = require("../Controller/gettingTodos");
const { DeleteTasks, DeleteOneTask } = require("../Controller/deleteTask");

const { MarkCheck } = require("../Controller/CheckMark");

const { MarkImportant } = require("../Controller/MarkImportant");

const { Search } = require("../Controller/Search");
const route = express.Router();

route.get("/", (req, res) => {
  res.status(200).json({
    Message: "Hello, Visiter thankyou for using this structure",
  });
});

route.post("/Create", CreatedTodo);

route.get("/GetTodos", gettingTodos);
route.get("/GetTodo/:id", getTodo);

route.put("/Add_Task/:Title_id", ADDTodo);
route.put("/ChangeTitle/:Title_id", ChangeTitle);
route.put("/Change_Todo/:Title_id/:Task_id", ChangeTodo);

route.delete("/DeleteTasks/:Title_id", DeleteTasks);
route.delete("/DeletetaTask/:Title_id/:Task_id", DeleteOneTask);

/** work in progress */

route.post("/Creates", CreateTask);

route.put("/CheckMark/:Title_id", MarkCheck);
route.put("/MarkImportant/:Title_id", MarkImportant);

route.get("/Search/:str", Search);
module.exports = route;
