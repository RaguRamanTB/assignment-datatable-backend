const Country = require("../models/country.model");

exports.findAll = (req, res) => {
  Country.findUsingConditions(
    req.params.limit,
    req.params.offset,
    req.params.sortBy,
    req.params.orderBy,
    (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || `Error retrieving countries for the page.`,
        });
      } else {
        res.send(data);
      }
    }
  );
};

exports.findCount = (_req, res) => {
  Country.findCount((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || `Error retrieving total number of countries.`,
      });
    } else {
      res.send(data);
    }
  });
};
