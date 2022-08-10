module.exports = (app) => {
  const countries = require("../controllers/country.controller");

  // Initializing the Express router
  const router = require("express").Router();

  // Retrieve total number of countries
  router.get("/", countries.findCount);

  // Retrieve countries using conditions
  router.get("/:limit-:offset/:sortBy-:orderBy", countries.findAll);

  app.use("/api/countries", router);
};
