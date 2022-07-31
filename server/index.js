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
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mariadb",
  database: "contact",
});

app.get("/", (req, res) => {
  const sqlQuery =
    "SELECT _id, Board_title, Board_message, Author_name, Author_password, DATE_FORMAT(Register_date, '%Y-%m-%d') AS Register_date, DATE_FORMAT(Update_date, '%Y-%m-%d') AS Update_date FROM contactBoards";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// app.post('')
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
