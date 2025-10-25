import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/time", (req, res) => {
  res.send(`Current time ${new Date().toLocaleString()}`);
});

app.get("/about", (req, res) => {
  res.send(`My name is Mehrnaz, Now it's ${new Date().toLocaleString()}`);
});

app.get("/random", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.send(randomNumber.toString());
});

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}`);
});

app.get("/sum", (req, res) => {
  const {a, b} = req.query;
  const sum = Number(a) + Number(b)
  res.send(sum.toString())
})
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
