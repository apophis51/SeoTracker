const express = require('express')
const path = require('path')
const cors = require('cors')
const volleyball = require('nodemon')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(express.json());

app.use("/api", require("./api"));


app.use(cors())
app.use(volleyball)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
