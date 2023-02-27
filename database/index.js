const mongoose = require('mongoose');

exports.clientPromise = mongoose
  .connect(
    process.env.CONNECTION_STRING,{useNewUrlParser:true,connectTimeoutMs:2000}
  ).then(async ()=>{
    console.log("database connected")
  })
  .catch((err) => console.log(err));
