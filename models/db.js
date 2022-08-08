const mysql = require("mysql2");
const dbConfiguration = require("../config/db.config");

// Creating connection to the database
const connection = mysql.createConnection({
  host: dbConfiguration.HOST,
  user: dbConfiguration.USER,
  password: dbConfiguration.PASSWORD,
  database: dbConfiguration.DATABASE,
});

connection.connect((error) => {
  if (error) {
    console.log("Error occured during database connection.");
    throw error;
  }
  console.log("Successfully connected to the database.");
});

module.exports = connection;
