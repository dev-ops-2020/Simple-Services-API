const { Router } = require('express');
const router = Router();

// Controllers
const IndexController = require('../controllers/index');
const CategoriesController = require('../controllers/categories');
const MembershipsController = require('../controllers/memberships');
const BusinessesController = require('../controllers/businesses');

// First route
router.get('/', IndexController.Index);

// Categories
router.post('/categories', CategoriesController.CreateCategory);
router.get('/categories/:id', CategoriesController.ReadCategory);
router.put('/categories/:id', CategoriesController.UpdateCategory);
router.delete('/categories/:id', CategoriesController.DeleteCategory);
router.get('/categories', CategoriesController.ListCategories);

// Memberships
router.post('/memberships', MembershipsController.CreateMembership);
router.get('/memberships/:id', MembershipsController.ReadMembership);
router.put('/memberships/:id', MembershipsController.UpdateMembership);
router.delete('/memberships/:id', MembershipsController.DeleteMembership);
router.get('/memberships', MembershipsController.ListMemberships);

// Businesses
router.post('/businesses', BusinessesController.CreateBusiness);
router.get('/businesses/:id', BusinessesController.ReadBusiness);
router.put('/businesses/:id', BusinessesController.UpdateBusiness);
router.delete('/businesses/:id', BusinessesController.DeleteBusiness);
router.get('/businesses', BusinessesController.ListBusinesses);
router.get('/businesses/category/:id', BusinessesController.ListBusinessesByCategory);

module.exports = router;