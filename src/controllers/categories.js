const CategoriesSchema = require('../models/categories');

function CreateCategory(req, res) {
  let Category = new CategoriesSchema();
  Category.name = req.body.name;
  Category.description = req.body.description;
  Category.icon = req.body.icon;
  Category.status = req.body.status;
  Category.save((err, Category) => {
    if (err) {
      return res.status(202).send({message: 'Error creating category'});
    } else {
    return res.status(200).send({message: 'Category created', category: Category});
    }
  });
}

function ListCategories(req, res) {
  CategoriesSchema.find({status: true}, (err, Categories) => {
    if (Categories.length == 0) {
      return res.status(202).send({message: 'No categories to show'});
    } else {
      return res.status(200).send({message: 'Ok', categories: Categories});
    }
  }).sort({name: 1});
}

module.exports = {
  CreateCategory,
  ListCategories
};