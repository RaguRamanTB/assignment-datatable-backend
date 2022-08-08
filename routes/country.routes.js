module.exports = (app) => {
  const countries = require("../controllers/country.controller");

  // Initializing the Express router
  const router = require("express").Router();

  // Retrieve country by ID
  router.get("/:id", countries.findOne);

  app.use("/api/countries", router);
};
