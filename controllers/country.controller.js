const Country = require("../models/country.model");

exports.findAll = (req, res) => {
  Country.findUsingConditions(
    req.body,
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
