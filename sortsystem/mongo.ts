const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Inventory = require('./models/Inventory'); // Mongoose modell

mongoose.connect('mongodb://localhost:27017/inventory', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.get('/api/inventory', async (req, res) => {
  const items = await Inventory.find();
  res.json(items);
});

app.post('/api/loan/:id', async (req, res) => {
  const { id } = req.params;
  await Inventory.findByIdAndUpdate(id, { status: 'loaned', user: req.body.user });
  res.sendStatus(200);
});

app.post('/api/return/:id', async (req, res) => {
  const { id } = req.params;
  await Inventory.findByIdAndUpdate(id, { status: 'available', user: '' });
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
