const sql = require("./db");

// Defining Country object with the constructor
const Country = (country) => {
  this.id = country.id;
  this.name = country.name;
  this.capital = country.capital;
  this.timezone = country.timezone;
  this.population = country.population;
};

Country.findUsingConditions = (reqBody, result) => {
  const { limit, offset, sortBy, orderBy } = reqBody;
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

module.exports = Country;
