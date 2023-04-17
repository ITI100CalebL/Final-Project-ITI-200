const express = require("express");
const bodyParser = require("body-parser")
const Pool = require('pg').Pool
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "postgres",
  port: 5432,
})

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));



app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});


