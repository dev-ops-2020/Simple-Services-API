const { Router } = require("express");
const router = Router();

// Controllers
const IndexController = require("../controllers/index");
const CategoriesController = require("../controllers/categories");
const MembershipsController = require("../controllers/memberships");

// First route
router.get("/", IndexController.getIndex);

// Categories
router.post("/categories", CategoriesController.CreateCategory);
router.get("/categories/:id", CategoriesController.ReadCategory);
router.put("/categories/:id", CategoriesController.UpdateCategory);
router.delete("/categories/:id", CategoriesController.DeleteCategory);
router.get("/categories", CategoriesController.ListCategories);

// Memberships
router.post("/memberships", MembershipsController.CreateMembership);
router.get("/memberships/:id", MembershipsController.ReadMembership);
router.put("/memberships/:id", MembershipsController.UpdateMembership);
router.delete("/memberships/:id", MembershipsController.DeleteMembership);
router.get("/memberships", MembershipsController.ListMemberships);

module.exports = router;
