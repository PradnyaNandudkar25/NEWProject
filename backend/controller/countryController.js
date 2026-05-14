const db = require('../config/db');

exports.getCountries = (req, res) => {
  const query = "select * from country";

  db.query(query, (err, results) => {
    if (err) {
      console.log('error fetching country', err);
    }
    else {
      res.json(results);
    }
  })
}


exports.getStatesByCountry = (req, res) => {
  const countryId = req.params.country_id;
  const query = "SELECT * FROM state WHERE country_id = ?";

  db.query(query, [countryId], (err, results) => {
    if (err) {
      console.log('error fetching state by id', err);
    }
    else {
      res.json(results);
    }
  })
}

exports.getDistByState = (req, res) => {
  const stateId = req.params.state_id;
  const query = "SELECT * FROM dist WHERE state_id = ?";

  db.query(query, [stateId], (err, results) => {
    if (err) {
      console.log('error fetching dist by id', err);
    }
    else {
      res.json(results);
    }
  })
};













