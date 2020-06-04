const CategoriesSchema = require('../models/categories');

function getCategories(req, res){
     CategoriesSchema.find({}, (err, Categories) => {
         if (err) return res.status(500).send('Bad request', err);
         if (!Categories) return res.status(404).send('No categories');
         res.status(200).send({Categories});
     });
};

function postCategories(req, res) {
    let Category = new CategoriesSchema();
    Category.name = req.body.name;
    Category.description = req.body.description;
    Category.icon = req.body.icon;
    Category.save((err, Category) => {
        if (err) res.status(500).send('Bad request', err);
        res.status(200).send({ Category: Category});
    });
}

module.exports = {
    getCategories,
    postCategories
};