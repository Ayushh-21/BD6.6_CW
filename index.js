const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const { getAllEmployees, getEmployeeById } = require('./controllers/index.js');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/employees', async (req, res) => {
  const employees = await getAllEmployees();
  res.status(200).json({ employees });
});

app.get('/employees/details/:id', async (req, res) => {
  let id = parseInt(req.params.id);
  const employee = await getEmployeeById(id);
  res.json({ employee });
});

module.exports = { app };
