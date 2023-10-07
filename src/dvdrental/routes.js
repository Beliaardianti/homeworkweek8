const express = require('express');
const router = express.Router();
const pool = require('./queries'); // Import pool dari file queries.js

// Menampilkan data seluruh list film
router.get('/film', (req, res) => {
  pool.query('SELECT * FROM film ORDER BY film_id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// Menampilkan data film tertentu berdasarkan id
router.get('/film/:id', (req, res) => {
  const filmId = req.params.id;
  pool.query('SELECT * FROM film WHERE film_id = $1', [filmId], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// Menampilkan data list category
router.get('/category', (req, res) => {
  pool.query('SELECT * FROM category', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
});

// Menampilkan data list film berdasarkan category
router.get('/films/category/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  pool.query(
    'SELECT f.* FROM film f INNER JOIN film_category fc ON f.film_id = fc.film_id WHERE fc.category_id = $1',
    [categoryId],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
});

module.exports = router;
