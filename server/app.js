const express = require("express");
const cors = require("cors");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const router = require("./routes/index");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

module.exports = app;
