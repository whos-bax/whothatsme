const express = require("express");
const app = express();
// const mysql = require("mysql");
const os = require("os");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mariadb",
  database: "test",
});
app.get("/", (req, res) => {
  console.log("first");
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
