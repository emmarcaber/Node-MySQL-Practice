const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

const port = process.env.port || 5000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// MySQL
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log(`Connected on ID ${connection.threadId}`);
});

// query(sqlString, callback)
app.get("/", (req, res) => {
    console.log(typeof conn)
});

// Listen on environment port or 5000
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
