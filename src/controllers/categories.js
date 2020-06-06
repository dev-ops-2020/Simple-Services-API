const CategoriesSchema = require('../models/categories');

function CreateCategory(req, res) {
  let Category = new CategoriesSchema();
  Category.name = req.body.name;
  Category.description = req.body.description;
  Category.icon = req.body.icon;
  Category.save((err, Category) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Category created', category: Category });
  });
}

function ReadCategory(req, res) {
  let id = req.params.id;
  CategoriesSchema.findByid(id, (err, Category) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Category read', category: Category });
  });
}

function UpdateCategory(req, res) {
  let id = req.params.id;
  let Category = req.body;
  CategoriesSchema.findByidAndUpdate(id, Category, (err, Categories) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Category updated', category: Category });
  });
}

function DeleteCategory(req, res) {
  let id = req.params.id;
  let Category = req.body;
  CategoriesSchema.findByIdAndDelete(id, Category, (err, Categories) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Category deleted', category: Category });
  });
}

function ListCategories(req, res) {
  CategoriesSchema.find({}, (err, Categories) => {
    if (err) res.status(500).json({message: err});
    res.status(200).json({ message: 'Ok', categories: Categories });
  });
}

module.exports = {
  CreateCategory,
  ReadCategory,
  UpdateCategory,
  DeleteCategory,
  ListCategories
};