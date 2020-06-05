const CategoriesSchema = require("../models/categories");

function CreateCategory(req, res) {
  let Category = new CategoriesSchema();
  Category.name = req.body.name;
  Category.description = req.body.description;
  Category.icon = req.body.icon;
  Category.save((err, Category) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Category created", category: Category });
  });
}

function ReadCategory(req, res) {
  let id = req.params.id;
  CategoriesSchema.findByid(id, (err, Category) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Category read", category: Category });
  });
}

function UpdateCategory(req, res) {
  let id = req.params.id;
  let update = req.body;
  CategoriesSchema.findByidAndUpdate(id, update, (err, Category) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Category updated", category: update });
  });
}

function DeleteCategory(req, res) {
  let id = req.params.id;
  CategoriesSchema.findByid(id, (err, Category) => {
    Category.remove((err) => {
      if (err) res.status(500).send(message, err);
      res.status(200).send({ message: "Category deleted", category: Category });
    });
  });
}

function ListCategories(req, res) {
  CategoriesSchema.find({}, (err, Categories) => {
    if (err) res.status(500).send(message, err);
    res.status(200).send({ message: "Ok", Categories: categories });
  });
}

module.exports = {
  CreateCategory,
  ReadCategory,
  UpdateCategory,
  DeleteCategory,
  ListCategories,
};
