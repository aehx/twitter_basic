const path = require("path");

module.exports = {
  dbUrl: process.env.CONNECTION_STRING,
  cert: "/etc/letsencrypt/live/www.dyma-projecty.site/fullchain.pem",
  key: "/etc/letsencrypt/live/www.dyma-projecty.site/privkey.pem",
  portHttp: 80,
  portHttps: 443,
};