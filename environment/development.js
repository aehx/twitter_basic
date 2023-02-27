const path = require("path");

module.exports = {
  dbUrl: process.env.CONNECTION_STRING,
  cert: path.join(__dirname, "../ssl/cert.pem"),
  key: path.join(__dirname, "../ssl/key.pem"),
  portHttp: 3000,
  portHttps: 3001,
};