const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo')
    .then(() => {
        console.log("Mongo Connection open!!");
    })
    .catch(err => {
        console.log("Mongo Error !!", err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const todoSchema = new mongoose.Schema({
    name: String,
    task: String
})

const Todo = mongoose.model("Todo", todoSchema);

/* class Todo {
    constructor(name, task) {
        this.name = name;
        this.task = task;
    }
}

const task1 = new Todo("Learn", "learn javascript and nodejs");
const task2 = new Todo("Wash car", "wash car with bucket");

let todoList = [task1, task2]; */

app.get('/', (req, res) => {
    Todo.find({}, function(err, todoList) {
        if (err) {
            console.log(err);
        } else {
            res.render("index.ejs", { todoList: todoList })
        }
    })
})

app.post("/newtodo", (req, res) => {
    console.log("item Submitted!");
    /* const name = req.body.name;
    const desc = req.body.task;
    const task = new Todo(name, desc);
    todoList.push(task); */
    const newTask = new Todo({
        name: req.body.name,
        task: req.body.task
    })
    Todo.create(newTask, function(err, Todo) {
        if (err) {
            console.log(err);
        } else {
            console.log("Inserted", newTask);
        }
    })
    res.redirect("/");
})

app.get('*', (req, res) => {
    res.send("<h1>Invalid page</h1>");
})


app.listen(3000, () => {
    console.log("App is listening port 3000");
})