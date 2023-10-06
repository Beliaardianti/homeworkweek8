const { Router } = require("express");

const router = Router();
const controller = require('./controller');

router.get('/', controller.film)
router.post('/', controller.film)
router.get('/:id', controller.filmById)
router.get('./', controller.listCategory)


module.exports = router;