const { Router } = require('express');
const router = Router();

// Controllers
const IndexController = require('../controllers/index');
const CategoriesController = require('../controllers/categories');
const MembershipsController = require('../controllers/memberships');
const BusinessesController = require('../controllers/businesses');
const CommentsController = require('../controllers/comments');
const UsersController = require('../controllers/users');
const ProductsController = require('../controllers/products');
const ServicesController = require('../controllers/services');
const CartController = require('../controllers/cart');

// First route
router.get('', IndexController.Index);
router.get('/terms', IndexController.Terms);

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
//router.get('businesses/user/:id', BusinessesController.ListBusinessesByUserFav);

// Comments
router.post('/comments', CommentsController.CreateComment);
router.get('/comments/:id', CommentsController.ReadComment);
router.put('/comments/:id', CommentsController.UpdateComment);
router.post('/comments/:id', CommentsController.DeleteComment);
router.get('/comments', CommentsController.ListComments)
router.get('/comments/business/:id', CommentsController.ListCommentsByBusiness)

// Users
router.post('/signup', UsersController.SignUp);
router.post('/signin', UsersController.SignIn);
router.get('/users/:id', UsersController.ReadUser);
router.put('/users/:id', UsersController.UpdateUser);
router.post('/users/:id', UsersController.DeleteUser);
router.get('/users', UsersController.ListUsers);

//Products
router.post('/products', ProductsController.CreateProduct);
router.get('/products/:id', ProductsController.ReadProduct);
router.put('/products/:id', ProductsController.UpdateProduct);
router.post('/products/:id', ProductsController.DeleteProduct);
router.get('/products', ProductsController.ListProducts);
router.get('/products/business/:id', ProductsController.ListProductsByBusiness);
router.get('/products/category/:id', ProductsController.ListProductsByCategory);

//Services
router.post('/services', ServicesController.CreateService);
router.get('/services/:id', ServicesController.ReadService);
router.put('/services/:id', ServicesController.UpdateService);
router.post('/services/:id', ServicesController.DeleteService);
router.get('/services', ServicesController.ListServices);
router.get('/services/business/:id', ServicesController.ListServicesByBusiness);
router.get('/services/category/:id', ServicesController.ListServicesByCategory);

//Cart
router.post('/cart/', CartController.CreateCart);
router.get('/cart/:id', CartController.ReadCart);
router.put('/cart/:cartId/:userId/:businessId', CartController.UpdateCart);
router.post('/cart/:id', CartController.DeleteCart);
router.post('/cart/:cartId/:productId', CartController.DeleteCartProduct);

module.exports = router;