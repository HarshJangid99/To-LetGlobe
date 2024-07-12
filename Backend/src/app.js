
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const { body, validationResult } = require('express-validator');

const app = express();
const port = process.env.PORT || 3000;

// Database connection
require("./db/conn");

// Models
const Register = require('./models/registers');

app.use(express.static(path.join(__dirname, '../../build')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});


app.get("/register", (req, res) => {
    res.render("register");
});

// Create new user in our database
app.post("/register",
  [
    body('topic').notEmpty().withMessage('Topic is required'),
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const registerEmployee = new Register({
        topic: req.body.topic,
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      });
      const registered = await registerEmployee.save();
      res.status(201).send(registered);
    } catch (e) {
      res.status(400).send(e);
    }
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
