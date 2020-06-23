const { Router } = require('express');
const router = Router();

// Controllers
const IndexController = require('../controllers/index');
const CategoriesController = require('../controllers/categories');
const MembershipsController = require('../controllers/memberships');
const BusinessesController = require('../controllers/businesses');
const CommentsController = require('../controllers/comments');
const ProductsController = require('../controllers/products');
const UsersController = require('../controllers/users');

// First route
router.get('/', IndexController.Index);

// TODO Change status to 0 on Delete Methods

// Categories
router.post('/categories', CategoriesController.CreateCategory);
router.get('/categories/:id', CategoriesController.ReadCategory);
router.put('/categories/:id', CategoriesController.UpdateCategory);
router.post('/categories/:id', CategoriesController.DeleteCategory);
router.get('/categories', CategoriesController.ListCategories);

// Memberships
router.post('/memberships', MembershipsController.CreateMembership);
router.get('/memberships/:id', MembershipsController.ReadMembership);
router.put('/memberships/:id', MembershipsController.UpdateMembership);
router.post('/memberships/:id', MembershipsController.DeleteMembership);
router.get('/memberships', MembershipsController.ListMemberships);

// Businesses
router.post('/businesses', BusinessesController.CreateBusiness);
router.get('/businesses/:id', BusinessesController.ReadBusiness);
router.put('/businesses/:id', BusinessesController.UpdateBusiness);
router.post('/businesses/:id', BusinessesController.DeleteBusiness);
router.get('/businesses', BusinessesController.ListBusinesses);
router.get('/businesses/category/:id', BusinessesController.ListBusinessesByCategory);
//router.get('/businesses/user/:id', BusinessesController.ListBusinessesByUserFav);

// Comments
router.post('/comments', CommentsController.CreateComment);
router.get('/comments/:id', CommentsController.ReadComment);
router.put('/comments/:id', CommentsController.UpdateComment);
router.post('/comments/:id', CommentsController.DeleteComment);
router.get('/comments', CommentsController.ListComments)
router.get('/comments/business/:id', CommentsController.ListCommentsByBusiness)

//Products
router.post('/products', ProductsController.CreateProduct);
router.get('/products/:id', ProductsController.ReadProduct);
router.put('/products/:id', ProductsController.UpdateProduct);
router.post('/products/:id', ProductsController.DeleteProduct);
router.get('/products', ProductsController.ListProducts);
router.get('/products/business/:id', ProductsController.ListProductsByBusiness);
router.get('/products/category/:id', ProductsController.ListProductsByCategory);

// Users
router.post('/signup', UsersController.SignUp);
router.post('/signin', UsersController.SignIn);
router.get('/users/:id', UsersController.ReadUser);
router.put('/users/:id', UsersController.UpdateUser);
router.post('/users/:id', UsersController.DeleteUser);
router.get('/users', UsersController.ListUsers);

module.exports = router;