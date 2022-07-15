//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const date = require(__dirname + "/date.js");


const tasks = ["buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

let today = date.getDate();

  res.render("list", {
    listTitle: today,
    allTasks: tasks
  });
});

app.post("/", function(req, res) {

  let task = req.body.newTask;

  if (req.body.list === "Work") {
    workItems.push(task);
    res.redirect("/work");
  } else {
    tasks.push(task);
    res.redirect("/");
  }



  tasks.push(allTask);

  res.redirect("/");
});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work List",
    allTasks: workItems
  });
});

app.post("/work", function(req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function(req, res) {
  res.render("about");
});






app.listen(port, function() {
  console.log("server succesfully running on port:" + port);
});
