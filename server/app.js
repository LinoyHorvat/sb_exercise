const express = require('express');
const app = express();
const cors = require("cors");
const path = require("path");
const axios = require("axios");
require("./db/mongoose");
// //
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, "../client/build");
app.use(express.static(publicPath));


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});