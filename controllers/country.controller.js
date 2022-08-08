const Country = require("../models/country.model");

exports.findOne = (req, res) => {
  Country.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Could not find country with ID - ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: `Error retrieving country with ID - ${req.params.id}.`,
        });
      }
    } else {
      res.send(data);
    }
  });
};
