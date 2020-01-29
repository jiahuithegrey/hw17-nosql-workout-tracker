// Server.js - This file is the initial starting point for the Node/Express server.
// *** Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 4000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// Requiring our models for syncing
const db = require("./models");

// Routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
