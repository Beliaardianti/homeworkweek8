const pool = require('./queries')



const film = (req, res) => {
    pool.query("SELECT * FROM film ORDER BY film_id ASC", (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  

const filmById = (req, res) => {
    const filmId = req.params.id;
    pool.query("SELECT * FROM film WHERE film_id = $1", [filmId], (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  


  const listCategory = (req, res) => {
    pool.query("SELECT * FROM category", (error, results) => {
      if (error) throw error;
      res.status(200).json(results.rows);
    });
  };
  
  const filmByCategory = (req, res) => {
    const categoryId = req.params.categoryId;
    pool.query("SELECT f.* FROM film f INNER JOIN film_category fc ON f.film_id = fc.film_id WHERE fc.category_id = $1",
        [categoryId],
        (error, results) => {
          if (error) throw error;
          res.status(200).json(results.rows);
        }
      );
  };
  
  
  

module.exports = {
    film,
    filmById,
    listCategory,
    filmByCategory
  

};

