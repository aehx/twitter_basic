require("dotenv").config();
require("./database/index");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const errorHandler = require("errorhandler");

const app = express();
module.exports = app;

const index = require("./routes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

require("./config/session.config");
require("./config/passport.config");

app.use(morgan("short"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(index);

if (process.env.NODE_ENV === "development") {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;
    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.message,
    });
  });
}
