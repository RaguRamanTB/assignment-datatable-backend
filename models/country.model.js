const sql = require("./db");

// Defining Country object with the constructor
const Country = (country) => {
  this.id = country.id;
  this.name = country.name;
  this.capital = country.capital;
  this.timezone = country.timezone;
  this.population = country.population;
};

Country.findUsingConditions = (limit, offset, sortBy, orderBy, result) => {
  sql.query(
    `(SELECT * FROM countries LIMIT ${limit} OFFSET ${offset}) ORDER BY ${sortBy} ${orderBy};`,
    (error, response) => {
      if (error) {
        console.log("Error: ", error);
        result(error, null);
        return;
      }
      result(null, response);
    }
  );
};

Country.findCount = (result) => {
  sql.query(`SELECT COUNT(*) AS count FROM countries;`, (error, res) => {
    if (error) {
      console.log("Error: ", error);
      result(error, null);
      return;
    }
    result(null, res);
  });
};

module.exports = Country;
