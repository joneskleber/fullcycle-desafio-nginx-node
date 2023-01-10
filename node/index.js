const express = require("express");

const app = express();

const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
  multipleStatements: true,
};

const mysql = require("mysql");

const connection = mysql
  .createConnection(config)
  .on("Error", (err) => console.log(err.toString()));

const sql = `INSERT INTO people(name) values('Jones Kleber')`;
connection.query(sql);

app.get("/", (req, res) => {
  let name = "";

  connection.query("SELECT name FROM people", (err, result) => {
    if (err) throw err;
    let message = `<h1>Full Cycle Rocks!!!</h1>
        <p><strong>Lista de nomes cadastrada no banco de dados</strong></p>
        <ul>`;
    result.forEach((element) => {
      message += `<li>${element.name}</li>`;
    });
    message += "</ul>";
    res.send(message);
  });
});

app.listen(port, () => {
  console.log("Servidor está rodando na porta " + port);
});
