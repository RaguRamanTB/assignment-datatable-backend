const sql = require("./db");

// Defining Country object with the constructor
const Country = (country) => {
  this.id = country.id;
  this.name = country.name;
  this.capital = country.capital;
  this.timezone = country.timezone;
  this.population = country.population;
};

Country.findById = (id, result) => {
  // ID SHOULD BE INTEGER - NEEDS VALIDATION
  sql.query(`SELECT * FROM countries WHERE id = ${id}`, (error, response) => {
    if (error) {
      console.log("Error: ", error);
      result(error, null);
      return;
    }
    if (response.length) {
      result(null, response[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

module.exports = Country;