"use strict";

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "gideon",
  password: "#Gideon1234",
});

connection.query("CREATE DATABASE node", function (err) {
  if (err) {
    console.log('Could not create database "node" .');
  }
});

connection.query("USE node", function (err) {
  if (err) {
    console.log('Could not switch to database "node".');
  }
});

connection.query(
  "CREATE TABLE passwords " +
    "(id INT(11) AUTO_INCREMENT, " +
    " password VARCHAR(255), " +
    " PRIMARY KEY(id))",
  function (err) {
    if (err) {
      console.log('Could not create table "test".');
    }
  }
);

connection.query('INSERT INTO passwords (password) VALUES ("secret")');
connection.query('INSERT INTO passwords (password) VALUES ("dont_tell")');
connection.end();
