const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

app.get("/students", (req, res) => {
  const students = [
    { name: "Cynthia", score: 85, result: "PASSED" },
    { name: "Amara", score: 45, result: "FAILED" },
    { name: "John", score: 72, result: "PASSED" },
  ];
  res.json(students);
});

app.get("/lab", (req, res) => {
  const results = [
    { patient: "Cynthia", test: "Blood Glucose", value: 5.2, status: "NORMAL" },
    { patient: "Amara", test: "Blood Glucose", value: 8.5, status: "HIGH" },
    { patient: "John", test: "Haemoglobin", value: 10.2, status: "LOW" },
  ];
  res.json(results);
});

app.listen(3000, () => {
  console.log("Express server running on http://localhost:3000");
});
