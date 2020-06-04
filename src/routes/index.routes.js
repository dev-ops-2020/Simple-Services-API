const { Router } = require('express');
const router = Router();
const IndexController = require('../controllers/index')
const CategoriesController = require('../controllers/categories');

// First route
router.get('/', IndexController.getIndex);

router.get('/categories', CategoriesController.getCategories);
router.post('/categories', CategoriesController.postCategories);

module.exports = router;