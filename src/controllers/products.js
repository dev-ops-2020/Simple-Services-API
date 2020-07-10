const ProductsSchema = require('../models/products');

function CreateProduct(req, res) {
  let Product = new ProductsSchema();
  Product.type = req.body.type;
  Product.name = req.body.name;
  Product.desc = req.body.desc;
  Product.price = req.body.price;
  Product.available = req.body.available;
  Product.pictures = req.body.pictures;
  Product.tags = req.body.tags;
  Product.businessId = req.body.businessId;
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
    } else if (!Product.available) {
      return res.status(202).send({message: 'Product not available'});
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
      ProductsSchema.findByIdAndDelete(id, (err, Product) => {
        return res.status(200).send({message: 'Product deleted'});
      });
    }
  });
}

function ListProducts(req, res) {
  ProductsSchema.find({available: true}, (err, Products) => {
    if (Products.length == 0) {
      return res.status(202).send({message: 'No products to show'});
    } else {
      return res.status(200).send({message: 'Ok', products: Products});
    }
  });
}

function ListProductsByBusiness(req, res) {
  let id = req.params.id;
  ProductsSchema.find({businessId: id}, (err, Products) => {
    if (Products.length == 0) {
      return res.status(202).send({message: 'No products to show'});
    } else {
      ProductsSchema.find({available}, (err, Products) => {
        if (Products.length == 0) {
          return res.status(202).send({message: 'No products to show'});
        } else {
          return res.status(200).send({message: 'Ok', products: Products});
        }
      });
    }
  });
}

function ListProductsByTags(req, res) {
  ProductsSchema.find({available: true}, (err, Products) => {
    if (Products.length == 0) {
      return res.status(202).send({message: 'No products to show'});
    } else {
      let tag = req.params.tag;
      ProductsSchema.find({tags: {tag}}, (err, Products) => {
        if (Products.length == 0) {
          return res.status(202).send({message: 'No products to show'});
        } else {
          return res.status(200).send({message: 'Ok', products: Products});
        }
      });
    }
  });
}
// TODO revise
function ListProductsAvailable(req, res) {
  let flag = req.params.flag;
  ProductsSchema.find({tags: {tag}}, (err, Products) => {
    if (Products.length == 0) {
      return res.status(202).send({message: 'No products to show'});
    } else {
      return res.status(200).send({message: 'Ok', products: Products});
    }
  });
}
// TODO revise
function ListProductsUnavailable(req, res) {
  let flag = req.params.flag;
  ProductsSchema.find({tags: {tag}}, (err, Products) => {
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
  ListProductsByTags,
  ListProductsAvailable,
  ListProductsUnavailable
};