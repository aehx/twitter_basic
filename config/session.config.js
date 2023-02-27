const app = require("../app");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

app.use(
  session({
    secret: "uw0sXujULyqKL0tU1m9TghER4BQGMcnVZez12",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
    store: MongoStore.create({
      mongoUrl: process.env.CONNECTION_STRING,
      ttl: 60 * 60 * 24 * 14,
    }),
  })
);

