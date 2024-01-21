const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "calculator.html"));
});

// GET method: using parameters
app.get("/add/:minuend/:subtrahend", (req, res) => {
  const minuend = parseFloat(req.params.minuend);
  const subtrahend = parseFloat(req.params.subtrahend);
  const sum = minuend + subtrahend;
  res.send(`${minuend} + ${subtrahend} = ${sum}`);
});

// GET method: using query
app.get("/subtract", (req, res) => {
  const minuend = parseFloat(req.query.minuend);
  const subtrahend = parseFloat(req.query.subtrahend);
  const result = minuend - subtrahend;
  res.send(`${minuend} - ${subtrahend} = ${result}`);
});

// POST method: body parser
app.post("/multiply", (req, res) => {
  const num1 = Number(req.body.multiplier);
  const num2 = Number(req.body.multiplicand);
  const result = num1 * num2;
  res.send(`${num1} x ${num2} = ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
