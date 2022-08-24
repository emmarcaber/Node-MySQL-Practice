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

// Listen on environment port or 5000
app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
