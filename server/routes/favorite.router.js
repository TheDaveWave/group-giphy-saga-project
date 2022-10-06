const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images /api/favorite
router.get('/', (req, res) => {

  // query text for getting data from data base table.
  const queryText = `SELECT * FROM "favorite" ORDER BY "id";`;
  pool.query(queryText)
  .then(response => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch(err => {
    console.log('Error in GET /api/favorite', err);
    res.sendStatus(500);
  });

  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
