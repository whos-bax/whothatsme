const cors = require("cors");
const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = process.env.port || 8000;

// cors 에러 서버에서 처리 (access 허용)
let corsOption = {
  origin: "*",
  credential: true,
};

app.use(cors(corsOption));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mariadb",
  database: "test",
});

app.get("/", (req, res) => {
  const sqlQuery = "select * from requested";
  db.query(sqlQuery, (err, result) => {
    res.send("success!");
    console.log(err);
    console.log(JSON.stringify(result));
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
