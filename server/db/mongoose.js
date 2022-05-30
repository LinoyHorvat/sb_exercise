const mongoose = require('mongoose');
const path = require ("path")
require("dotenv").config({path: "../../.env"});

//TODO: Remove actual url from file 
console.log("////////////////////////////////////////////////////////////////",process.env.MONGO_URL);

// const mongo_uri = process.env.MONGO_URL;
const mongoose_uri = "mongodb+srv://group7:group7@cluster0.4sypx.mongodb.net/test?authSource=admin&replicaSet=atlas-10b2v9-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true"

mongoose.connect(mongoose_uri, () => {
  console.log("connected to db");
})