const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Task 1: Create a GET Route
app.get("/hello", (req, res) => {
    res.send("Hello Web Developer");
});

// Task 2: Route Parameter Example
app.get("/user/:name", (req, res) => {
    const name = req.params.name;

    res.send("Welcome " + name);
});

// Task 3: Simple Calculator API
app.get("/add", (req, res) => {
    const a = Number(req.query.a);
    const b = Number(req.query.b);

    const sum = a + b;

    res.send("Sum: " + sum);
});

// Task 4: POST Form Data Receiver
app.post("/submit", (req, res) => {
    const name = req.body.name;

    res.send("Form submitted by " + name);
});

// Task 5: Serve Static HTML File
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000");
});