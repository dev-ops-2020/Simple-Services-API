const ProductsSchema = require('../models/products');

function CreateProduct(req, res) {
  let Product = new ProductsSchema();
  Product.name = req.body.name;
  Product.description = req.body.description;
  Product.available = req.body.available;
  Product.prices = req.body.prices;
  Product.pictures = req.body.pictures;
  Product.status = req.body.status;
  Product.categories = req.body.categories;
  Product.idEstablishment = req.body.idEstablishment;
  Product.save((err, Product) => {
    if (err) {
      return res.status(202).send({message: 'Error storing Product'});
    } else {
    return res.status(200).send({message: 'Product stored', product: Product});
    }
  });
}

function ReadProduct(req, res) {
  let id = req.params.id;
  ProductsSchema.findById(id, (err, Product) => {
    if (!Product) {
      return res.status(202).send({message: 'Product not found'});
    } else if (!Product.status) {
      return res.status(202).send({message: 'Product deleted...'});
    } else {      
      return res.status(200).send({message: 'Product read', product: Product});
    }
  });
}

function UpdateProduct(req, res) {
  let id = req.params.id;
  let Product = req.body;
  ProductsSchema.findByIdAndUpdate(id, Product, (err, Product) => {
    if (err) {
      return res.status(202).send({message: 'Update failed'});
    } else if (!Product.status) {
      return res.status(202).send({message: 'Product deleted...'});
    } else {      
      return res.status(200).send({message: 'Product updated'});
    }
  });
}

function DeleteProduct(req, res) {
  let id = req.params.id;
  ProductsSchema.findById(id, (err, Product) => {
    if (!Product) {
      return res.status(202).send({message: 'Product not found'});
    } else {
      ProductsSchema.findByIdAndUpdate(id, {$set: {status: false}}, (err, Product) => {
        return res.status(200).send({message: 'Product deleted'});
      });
    }
  });
}

function ListProducts(req, res) {
  ProductsSchema.find({status: true}, (err, Products) => {
    if (Products.length == 0) {
      return res.status(202).send({message: 'No products to show'});
    } else {
      return res.status(200).send({message: 'Ok', products: Products});
    }
  });
}

function ListProductsByCategory(req, res) {
  let id = req.params.id;
  ProductsSchema.find({categories: {category: id}}, (err, Products) => {
    if (Products.length == 0) {
      return res.status(202).send({message: 'No Products to show'});
    } else {
      return res.status(200).send({message: 'Ok', Products: Products});
    }
  });
}

function ListProductsByBusiness(req, res) {
    let id = req.params.id;
    ProductsSchema.find({idEstablishment: id}, (err, Products) => {
      if (Products.length == 0) {
        return res.status(202).send({message: 'No products to show'});
      } else {
        return res.status(200).send({message: 'Ok', products: Products});
      }
    });
  }
  
function ListProductsByCategory(req, res) {
  let id = req.params.id;
  ProductsSchema.find({categories: {category: id}}, (err, Products) => {
    if (Products.length == 0) {
      return res.status(202).send({message: 'No products to show'});
    } else {
      return res.status(200).send({message: 'Ok', products: Products});
    }
  });
}

module.exports = {
  CreateProduct,
  ReadProduct,
  UpdateProduct,
  DeleteProduct,
  ListProducts,
  ListProductsByBusiness,
  ListProductsByCategory
};