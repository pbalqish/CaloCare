const express = require("express");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const router = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

module.exports = app;
