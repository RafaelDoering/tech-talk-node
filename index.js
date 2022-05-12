const express = require('express');

const students = require('./students');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/students', function (req, res) {
  const { id, name } = req.body;

  return res.send(students.create(id, name));
});

app.get('/students/:id', function (req, res) {
  const id = req.params.id;

  return res.send(students.findById(id));
});

app.get('/students', function (req, res) {
  return res.send(students.findAll());
});

app.put('/students/:id', function (req, res) {
  const id = req.params.id;
  const { name } = req.body;

  return res.send(students.updateById(id, name));
});

app.delete('/students/:id', function (req, res) {
  const id = req.params.id;

  return res.send(students.deleteById(id));
});

app.listen(3000);
