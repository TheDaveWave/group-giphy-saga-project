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
      res.send(response.rows);
    })
    .catch(err => {
      console.log('Error in GET /api/favorite', err);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post('/', (req, res) => {
  let addFavorite = req.body;
  console.log(`Adding favorite`, addFavorite);

  let queryText = `INSERT INTO "favorite" ("gif_obj", "category_id")
                   VALUES ($1, $2);`;
  pool.query(queryText, [addFavorite.gif_obj, addFavorite.category_id])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new favorite`, error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log(req.params);
  const favId = req.params.favId;
  const catId = req.body.catId;

  const queryText = `UPDATE "favorite" SET "category_id"= $1 WHERE id=$2 RETURNING *;`;
  pool.query(queryText, [catId, favId])
  .then((result) => res.send(result.rows))
  .catch(err => {
    console.log(`Error in PUT`, err);
    res.sendStatus(500);
  });
});

// delete a favorite
router.delete('/:favId', (req, res) => {
  let queryText = 'DELETE FROM "favorite" WHERE id=$1';
  pool.query(queryText, [req.params.favId])
  .then(()=> res.sendStatus(200))
  .catch(error => {
    console.log('error deleting favorite', error);
    res.sendStatus(500);
  })
});

module.exports = router;
