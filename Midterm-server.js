const express = require("express");
const bodyParser = require("body-parser")
const Pool = require('pg').Pool
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const pool = new Pool({
  user: "postgres",
  host: "midterm-db-inst.civsmebsnadf.us-east-2.rds.amazonaws.com",
  database: "midterm_db_name",
  password: "postgres",
  port: 5432,
})

const app = express();

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/messages", (req, res) => {

  pool.query('SELECT * FROM messages', (error, results) => {

    if (error) throw error

    res.status(200).json(results.rows)
  })
});

app.post("/api/messages/create", (req, res) => {

  const data = req.body;

  const sql = "INSERT INTO messages (response, username) VALUES ('" + data.title + "','" + data.author + "')"

  pool.query(sql, (error, results) => {

    if (error) throw error

    res.status(200).json(results.rows)
  })
});



app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});


