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

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "mariadb",
  database: "contact",
});

// SELECT
app.get("/", (req, res) => {
  const sqlQuery =
    "SELECT _id, Board_title, Board_message, Author_name, Author_password, DATE_FORMAT(Register_date, '%Y-%m-%d') AS Register_date, DATE_FORMAT(Update_date, '%Y-%m-%d') AS Update_date FROM contactBoards;";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// INSERT
app.post("/insert", (req, res) => {
  const title = req.body.title;
  const message = req.body.message;
  const name = req.body.name;
  const password = req.body.password;

  const sqlQuery =
    "INSERT INTO contactBoards(Board_title, Board_message, Author_name, Author_password) VALUES (?,?,?,?);";
  db.query(sqlQuery, [title, message, name, password], (err, result) => {
    res.send(result);
  });
});

// UPDATE

// DELETE
app.post("/delete", (req, res) => {
  console.log(req.body.id);

  const sqlQuery = "DELETE FROM contactBoards WHERE _id = ?";
  db.query(sqlQuery, [req.body.id], (err, result) => {
    res.send(result);
  });
});
